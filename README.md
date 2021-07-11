
# Potter Kata

This Project was made in Gitpod and demonstrates using JavaScript how to calculate discount prices using a range of 5 books.

I Allowed the user to add 1 book each and displayed a different discount value depending on how many are added.

One copy of any of the five books costs 8 EUR. If, however, you buy two different books from the series, you get a 5% discount on those two books. If you buy 3 different books, you get a 10% discount. With 4 different books, you get a 20% discount. If you go the whole hog, and buy all 5, you get a huge 25% discount.

Note that if you buy, say, four books, of which 3 are different titles, you get a 10% discount on the 3 that form part of a set, but the fourth book still costs 8 EUR.

For example, how much does this basket of books cost?

2 copies of the first book 2 copies of the second book 2 copies of the third book 1 copy of the fourth book 1 copy of the fifth book answer :

### At First glance it would be expected to be:

(5 * 8) - 25% [first book, second book, third book, fourth book, fifth book]

(3 * 8) - 10% [first book, second book, third book]
30 + 21.60 = 51.60

### CHEAPER SOLUTION:

(4 * 8) - 20% [first book, second book, third book, fourth book]
+ (4 * 8) - 20% [first book, second book, third book, fifth book]
= 25.6 * 2
= 51.20

The 2nd option is the correct and wiser decision to make.
