package io;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

public class StreamEx2 {
	static final int BUFFER_SIZE = 512;

	public static void main(String[] args) {
		String src = "c:/windows/system.ini";
		String dest = "d:/temp/system_copy.ini";

		try (
			FileInputStream fis = new FileInputStream(src);
			FileOutputStream fos = new FileOutputStream(dest)
		) {
			byte[] buffer = new byte[BUFFER_SIZE];
			int read;

			while ((read = fis.read(buffer)) != -1) {
				fos.write(buffer, 0, read);
			}
		} catch (IOException e) {
			e.printStackTrace(System.out);
		}
	}
}
