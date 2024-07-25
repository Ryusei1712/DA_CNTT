# Sử dụng hình ảnh JDK 21
FROM openjdk:21-jdk-slim

# Thiết lập thư mục làm việc
WORKDIR /app

# Copy file jar của ứng dụng vào container
COPY target/production_management-0.0.1-SNAPSHOT.jar /app/production_management.jar

# Cấu hình cổng mà ứng dụng sẽ chạy
EXPOSE 8082

# Command để chạy ứng dụng Spring Boot
ENTRYPOINT ["java", "-jar", "/app/production_management.jar"]
