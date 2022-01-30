package javas;

public class euler2 {

    public static int even[] = new int[4000001];

    public static int fib(int n){
        int sum=0;
        int evensum=0;
        
        for(int i=0;i<n/2;i++){
            even[i] = -1;
        }
        if(even[(int) n]!=-1){
            return even[(int) n];
        }
        if(n==1 || n==2){
            return n;
        }
        else{
            sum=fib(n-1)+fib(n-2);
            even[(int)n] = sum;
        }
        for(int i=0;i<even.length;i++){
            if(even[(int) i]%2==0){
                evensum+=even[(int) i];
            }
        }
        return evensum;

        }
        
    public static void main(String[] args){
        int n = 4000000;
        System.out.println(fib(n));
    }
}
