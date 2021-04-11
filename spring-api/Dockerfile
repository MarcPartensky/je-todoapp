FROM openjdk:8-jdk-alpine

COPY target /target

RUN addgroup -S spring && adduser -S spring -G spring
USER spring:spring

ENTRYPOINT ["java", "-jar", "/target/accessing-data-mysql-0.0.1-SNAPSHOT.jar"]
