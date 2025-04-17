function parseUplink(device, payload)
{
    // Obtener payload como JSON
    const jsonPayload = payload.asJsonObject();

    // No se puede deserializar el payload como json, salir.
    if (!jsonPayload) { return; }

     
      
    // Parsear y almacenar la temperatura
    
    if (jsonPayload.temperature != null) {
        var temperatureSensor = device.endpoints.byAddress(1);
        temperatureSensor.updateTemperatureSensorStatus(jsonPayload.temperature, jsonPayload.tempTimestamp);
        env.log("Temperatura ->>  ",jsonPayload.temperature);
        env.log("Hora ->>  ",jsonPayload.tempTimestamp);    
        
    }

    

}

function buildDownlink(device, endpoint, command, payload)
{
    payload.setAsString(command.custom.data);
    payload.requiresResponse = false;
	payload.buildResult = downlinkBuildResult.ok;
    return;
}