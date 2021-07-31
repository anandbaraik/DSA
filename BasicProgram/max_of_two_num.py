# Get maximum of two number
num1 = input("Enter your first num: ")
num2 = input("Enter your second num: ")
if num1 > num2 :
 print("{num1} is greater than {num2}".format(num1=num1, num2=num2))
elif num2 > num1 :
 print("{num2} is greater than {num1}".format(num1=num1, num2=num2))
else :
 print("{} & {} are same".format(num1, num2))