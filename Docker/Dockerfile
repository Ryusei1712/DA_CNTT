# Sử dụng hình ảnh JDK 21
FROM openjdk:21-jdk-slim

# Thiết lập thư mục làm việc
WORKDIR /app

# Copy file jar của ứng dụng vào container
COPY ../target/DA_CNTT-0.0.1-SNAPSHOT.jar /app/seafoodapp.jar

# Cấu hình cổng mà ứng dụng sẽ chạy
EXPOSE 8080

# Command để chạy ứng dụng Spring Boot
ENTRYPOINT ["java", "-jar", "seafoodapp.jar"]
