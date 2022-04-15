# RetoDigitalSchool
Reto para digital school 
Implementar una aplicación para manejo de un pequeño parqueadero el cual ofrece el
servicio por mensualidades o por horas. El parqueadero tiene capacidad para 30
vehículos (puede variar) y en todo momento debe garantizar que haya espacios
disponibles para los vehículos que tienen contrato por mensualidades.
El sistema deberá cumplir los siguientes requisitos funcionales.
1. Mantener un registro actualizado de los vehículos que tienen un contrato mensual
con sus datos generales: placa, y nombre conductor
2. Registrar el ingreso de un vehículo al parqueadero con su placa fecha y hora de
ingreso (tomada de la fecha y hora del sistema). El sistema debe controlar si se
trata de un vehículo con contrato por mensualidad (que debe tener su cupo
asegurado), en cuyo caso se muestran sus datos generales, o un vehículo
cualquiera en cuyo caso se debe controlar si hay espacio disponible.
3. Registrar la hora de salida del vehículo del parqueadero. Si se trata de un vehículo
que no tiene un contrato mensual, se debe calcular el tiempo en que estuvo en el
parqueadero y el valor a pagar respectivo.
4. Se debe poder consultar en todo momento los vehículos parqueados, incluyendo los
de mensualidad y los de pago por horas.
5. Se debe poder buscar un vehículo por placa para ver su hora de ingreso.
Regla de negocio: Cálculo de tarifa de parqueo para vehículos sin contrato: $100
pesos por cada minuto o fracción de minuto.
Recomendaciones técnicas:
● Utilice una base de datos relacional como H2, MariaDB o MySql.
● Procure que su solución tenga una separación por capas de la lógica de
presentación y la lógica de negocio.
● Tenga en cuenta que hay consultas que puede reutilizar, lo cual le facilitará la
vida.
● Realice la implementación en un lenguaje para la web como NodeJS o java en el
back y Angular o React para el front (o similares).
● Recuerde que es importante exponer y consumir servicios.
