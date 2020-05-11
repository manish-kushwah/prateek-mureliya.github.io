---
categories: [java]
tags: ['Java Programs']
title: Printing pyramid pattern in java
---

**Approach:** For odd number row, values are being displayed in increasing order and for even number row, values are being displayed in decreasing order.

<!--more-->

``` plaintext
   1
  2*3
 4*5*6
10*9*8*7
```

``` java
public class Pyramid_Pattern{
    public static void main(String... args){
        int rows=4; //change to accordance
        int count=1, a=1;

        for(int i=1; i<=rows; i++){
            for(int space=1; space<=rows-i; space++){
                    System.out.print(" ");
            }

            for(int j=1; j<=i; j++){
                if(j!=1)
                    System.out.print("*");

                if(i%2==0){
                    System.out.print(count+i-a);
                    a+=2;
                } else {
                     System.out.print(count);
                }

                count++;
            }

            System.out.println();
            a=1;
        }

    }
}
```