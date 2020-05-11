---
categories: [java]
tags: ['Java Programs']
title: Write a program to print fibonacci series in java
image: /assets/images/fibonacci-series.dib
---

In fibonacci series, next number is the sum of previous two numbers for example 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 etc.
<!--more-->

# 1) Fibonacci Series using Array: (best approach)

``` java
public class Fibonacci{
    public static void main(String []args){
        int count=15; //change accordingly
    
        int[] fs = getSeries(count);
    
        for(int i=0; i<fs.length; i++)
            System.out.print(fs[i]+" ");
    }

    public static int[] getSeries(int n){
        int[] series = new int[n];
        int a=0, b=1;
    
        for(int i=0; i<series.length; i++){
            series[i]=a;
            a=a+b;
            b=a-b;
        }
    
        return series;
    }
}
```

# 2) Fibonacci Series without using recursion:

``` java
public class Fibonacci{
     public static void main(String []args){
        int a=0, b=1;
        int count=10; //change accordingly
     
        for(int i=0; i<count; i++){
            System.out.print(a+" ");
            a=a+b;
            b=a-b;
        }
     }
}
```

# 3) Fibonacci Series using recursion:

``` java
public class Fibonacci{
     static int a=0, b=1;
 
     public static void main(String []args){
        int count=13; //change accordingly
     
        printSeries(count);
     }
   
     public static void printSeries(int n){
         if(n>0){
             System.out.print(a+" ");
             a=a+b;
             b=a-b;
           
             printSeries(n-1); //function call itself
         }
     }
}
```