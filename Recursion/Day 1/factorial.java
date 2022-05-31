import java.io.*;
import java.util.*;
class Solution {
	
   static int factorial(int num) {

        if(num < 1) return 1; //base case to prevent from infinite func call
        
        return num * factorial(num - 1);
    }
    
	public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        if(num < 0) {
            System.out.println("Error");
        } else {
            System.out.println(factorial(num));
        }
	}
}