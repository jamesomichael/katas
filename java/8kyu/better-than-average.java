import java.util.Arrays;

public class Kata {
	public static boolean betterThanAverage(int[] classPoints, int yourPoints) {
    	double average = Arrays.stream(classPoints).average().orElse(0);
    	return yourPoints > average;
  	}
}