# Stage 1: Build the React app
FROM node:18 as build

WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package.json .
COPY package-lock.json .

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the React app with Nginx
FROM nginx:alpine

# Copy the built files from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Copy the custom Nginx configuration file
COPY src/config/nginx.conf /etc/nginx/conf.d/default.conf

# Expose the default Nginx port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
