package com.seafood.management.production_management.service;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

public class BackupUtil {

    public static <T> void backupInfo(String path, T object, String fileName) {
        String objectInfo = object.toString();
        String backupFilePath = path + "/" + fileName + ".txt";

        // Create the backup directory if it doesn't exist
        File backupDirectory = new File(path);
        if (!backupDirectory.exists()) {
            backupDirectory.mkdirs();
        }

        try (BufferedWriter writer = new BufferedWriter(new FileWriter(backupFilePath))) {
            writer.write(objectInfo);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

