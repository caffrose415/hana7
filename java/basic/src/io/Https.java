package io;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.Arrays;

import com.fasterxml.jackson.databind.ObjectMapper;

public class Https {
	public static void main(String[] arags) throws IOException, InterruptedException {
		String apiurl = "https://jsonplaceholder.typicode.com/posts";

		HttpClient client = HttpClient.newHttpClient();

		HttpRequest request = HttpRequest.newBuilder().uri(URI.create(apiurl)).build();

		HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());

		System.out.println("상태 코드: " + response.statusCode());
		System.out.println("응답 헤더: " + response.headers().map());
		System.out.println("응답 Body: " + response.body());

		ObjectMapper objMapper = new ObjectMapper();
		Post[] posts = objMapper.readValue(response.body(), Post[].class);
		System.out.println(Arrays.toString(posts));
	}
}
