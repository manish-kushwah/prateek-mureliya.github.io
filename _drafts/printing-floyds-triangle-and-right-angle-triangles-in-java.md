---
categories: [java]
tags: ['Java Programs']
title: Printing Floyd’s Triangle or Right Angle Triangle in java
image: /assets/images/patterns1.png
---
<!--more-->

# Pattern 1 :

``` plaintext
*
* *
* * *
* * * *
* * * * *
```

``` java
public class Pattern{
     public static void main(String []args){
         int rows=5;//changed accordingly
       
         for(int i=1; i<=rows; i++){
             for(int j=1; j<=i; j++){
                 System.out.print("* ");
             }
         
              System.out.println(); //for next line
         }
     }
}
```

# Pattern 2 :

``` plaintext
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
```

``` java
public class Pattern{
     public static void main(String []args){
         int rows=5;//changed accordingly
       
         for(int i=1; i<=rows; i++){
             for(int j=1; j<=i; j++){
                 System.out.print(j+" "); // print value of j (inner loop value)
             }
         
              System.out.println(); //for next line
         }
     }
}
```

# Pattern 3 :

``` plaintext
1
2 2
3 3 3
4 4 4 4
5 5 5 5 5
```

``` java
public class Pattern{
     public static void main(String []args){
         int rows=5;//changed accordingly
       
         for(int i=1; i<=rows; i++){
             for(int j=1; j<=i; j++){
                 System.out.print(i+" "); // print value of i (outer loop value)
             }
         
              System.out.println(); //for next line
         }
     }
}
```

# Pattern 4 :

``` plaintext
1
0 1
1 0 1
0 1 0 1
1 0 1 0 1
```

``` java
public class Pattern{
     public static void main(String []args){
         int rows=5;//changed accordingly
       
         for(int i=1; i<=rows; i++){
             for(int j=1; j<=i; j++){
                 if((i+j)%2==0) //check addition of i and j is even or not
                    System.out.print("1 ");
                 else
                    System.out.print("0 ");
             }
         
              System.out.println(); //for next line
         }
     }
}
```

# Pattern 5 :

``` plaintext
1
2 3
4  5 7
7 8 9 10
11 12 13 14 15
```

``` java
public class Pattern{
     public static void main(String []args){
         int rows=5;//changed accordingly
       
         for(int i=1, k=1; i<=rows; i++){//declared k with 1
             for(int j=1; j<=i; j++, k++){//increment k value
                 System.out.print(k+" "); //print value of k
             }
         
              System.out.println(); //for next line
         }
     }
}
```

# Pattern 6 :

``` plaintext
1
2 6
3 7 10
4 8 11 13
5 9 12 14 15
```

``` java
public class Pattern{
     public static void main(String []args){
         int rows=5;//changed accordingly
       
         for(int i=1; i<=rows; i++){
             int num=i;
             for(int j=1; j<=i; j++){
                 System.out.print(num+" ");
                 num=num+rows-j;
             }
         
              System.out.println(); //for next line
         }
     }
}
```