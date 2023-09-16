#include <stdio.h>

int main() 
{
   int unsorted_numbers[7];
   int length = 7;

   unsorted_numbers[0] = 42;
   unsorted_numbers[1] = 17;
   unsorted_numbers[2] = 24;
   unsorted_numbers[3] = -3;
   unsorted_numbers[4] = 55;
   unsorted_numbers[5] = 11;
   unsorted_numbers[6] = 2;

   for (int i = 0; i < length; i++)
   {
      printf("%i, ", unsorted_numbers[i]);
   }
   printf("\n");

   // pop
   length--;

   for (int i = 0; i < length; i++)
   {
      printf("%i, ", unsorted_numbers[i]);
   }
   printf("\n");

  // push

  unsorted_numbers[length] = 22;
  length++;

   for (int i = 0; i < length; i++)
   {
      printf("%i, ", unsorted_numbers[i]);
   }
   printf("\n");

   unsorted_numbers[length] = 22;
   length++;
}

// bob, 22
// alice, 23
// alice, 23
// alice, 23
// alice, 23
// alice, 23

