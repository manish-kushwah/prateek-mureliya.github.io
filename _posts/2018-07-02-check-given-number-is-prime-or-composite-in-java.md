---
categories: [java]
tags: ['Java Programs']
title: Write a program to check given number is prime or composite in java
image: /assets/images/prime-number.jpg
---

**Prime number** is a positive integer greater than 1 that can be divided by 1 and itself. For example 2, 3, 5, 7, 11, 13, 17.... are the prime numbers.
<!--more-->

> 0 and 1 are not prime numbers. The 2 is the only even prime number because all the other even numbers can be divided by 2.

# 1) Check prime number or not.

``` java
public class PrimeNumber{
     public static void main(String []args){
         int n=23; //check this number
         boolean flag=true;
       
         if(n<2)
            flag=false;
     
         for(int i=2; i<=Math.sqrt(n); i++){
             if(n%i==0){
                 flag=false;
                 break;
             }
         }
       
         if(flag)
            System.out.println(n+" is a prime number.");
         else
            System.out.println(n+" is not a prime number.");
     }
}
```

# 2) Check prime number or not, using method.

``` java
public class PrimeNumber{
     public static void main(String []args){
         int n=11; //check this number
       
         if(isPrime(n))
            System.out.println(n+" is a prime number.");
         else
            System.out.println(n+" is not a prime number.");
     }
   
     public static boolean isPrime(int n){
         if(n<2)
            return false;
     
         for(int i=2; i<=Math.sqrt(n); i++){
             if(n%i==0){
                 return false;
             }
         }
       
         return true;
     }
}
```

# 3) To print prime numbers between a range.

``` java
public class PrimeNumber{
     public static void main(String []args){
         int start=1, end=100;
       
         for(int i=start; i<=end; i++)
             if(isPrime(i))
                 System.out.print(i+" ");
     }
   
     public static boolean isPrime(int n){
         if(n<2)
            return false;
     
         for(int i=2; i<=Math.sqrt(n); i++){
             if(n%i==0){
                 return false;
             }
         }
       
         return true;
     }
}
```