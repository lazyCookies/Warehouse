# a = input("请输入用户名")
# if a == "admin":
#     print("你好，管理员！")

#成绩查询开始
# a = int(input("请输入成绩："))
# if 0 <= a < 60 :
#     print("不及格，滚！！！")
# if 60 <= a < 80 :
#     print("中等成绩，还行！")
# if 80 <= a < 90 :
#     print("良好，继续努力哦！！")
# if 90 <= a <= 100 :
#     print("优秀，我很看好你哦！！！")
# if a < 0 or a > 100:
#     print("数据错误")
#成绩查询结束

# 奇偶数计算器开始
# print("提示：程序会自动将小数转化为整数，请您不要输入文字！！！")
# user = int(float(input("请输入要判断的数字")))
# if user % 2 == 0 :
#     print(user,"是偶数")
# elif user % 2 == 1 :
#     print(user , "是奇数")
# else :
#     print("请输入正确的数字")
# 奇偶数计算器结束

# 闰年计算器开始
# year = int(input("请输入年份："))

# if (year % 4 == 0) and (year % 100 != 0) or year % 400 == 0 :
#     print(year , "年是闰年")
# else :
#     print(year , "年不是闰年")
# 闰年计算器结束

# name = '王礼壮'
# print(f'欢迎{name}光临')
# print('欢迎%s光临'%name)
# print(f'欢迎'+name+'光临')
# print(f'欢迎',name,'光临')
# print(8//3)


# 狗的年龄计算器开始
# print("提示：请您尽量输入整数年龄，若输入的年龄不是整数，系统会将小数点后的数字舍去。请不要输入文字！！！")
# dogAge = float(input("请输入爱犬的年龄："))
# shuc = 0
# if dogAge > 2 :
#     shuc = 21 + ( dogAge - 2) *4
#     print("您爱犬的年龄相当于人类的",shuc,"岁")
# elif 0 < dogAge <= 2 :
#     shuc = dogAge * 10.5
#     print("您爱犬的年龄相当于人类的", shuc , "岁")
# elif dogAge < 0 :
#     print("数据错误！！")
# 狗的年龄计算器结束

# 小明成绩奖励开始
# cj = float(input("请输入成绩："))
# if cj < 0 or cj > 100 :
#     print("非合法数字")
# elif cj == 100 :
#     print("考得不错，奖励一台BWM")
# elif cj < 0 and cj > 100 :
#     print("非合法数字")
# elif 80 <= cj <= 99 :
#     print("奖励一台iphone")
# elif 60 <= cj <= 79 :
#     print("奖励一本参考书")
# else :
#     print("什么奖励也没有")
# 小明成绩奖励结束

# 男大当婚，女大当嫁开始
# fu = float(input("请输入财富,单位（万）："))
# gao = float(input("请输入身高，单位（cm）："))
# shuai = float(input("请输入帅气值："))
# if fu >= 1000 and gao >= 180 and shuai >= 500 :
#     print("我一定要嫁给你！！！")
# elif fu >= 1000 or gao >= 180 or shuai >= 500 :
#     print("嫁吧，比上不足，比下有余")
# else :
#     print('不嫁，滚！！！')
# 男大当婚，女大当嫁结束

# 100以内所有奇数之和 开始
# sum = 0
# i = 0
# while i < 100 :
#     if i % 2 == 1 :
#         sum += i
#     i += 1
# print("100以内的奇数和 = ",sum)
# 100以内所有奇数之和 结束

# 100以内所有7的倍数之和，以及个数 开始
# i = 0
# sum = 0
# gs = 0
# while i < 100 :
#     if i % 7 == 0 :
#         sum += i
#         gs += 1
#     i += 1
# print("100以内所有7的倍数之和 = ", sum)
# print("100以内所有7的倍数总共有", gs , "个")
# 100以内所有7的倍数之和，以及个数 结束

# 判断用户输入的数值是否是质数 开始
# a = int(float(input("请输入任意大于一的数：")))
# if a > 1 :
#     i = 0
#     g = 0
#     while i < a :
#         i += 1
#         if a % i == 0 :
#             g += 1
#     if  g == 2 :
#         print(a , "是质数")
#     else :
#         print(a , "不是质数")
# else : 
#     print("数据错误，请重新输入")
# 判断用户输入的数值是否是质数 结束

# 判断用户输入的数值是否是质数(新版) 开始
# num = int(input("请输入大于一的数："))
# if num >= 2 :
#     i = 2
#     Flag = True
#     while i < num :
#         if num % i == 0 :
#             flag = False
#         i += 1
#     if flag == False :
#         print(num,"不是质数")
#     else :
#         print(num,"是质数")
# else :
#     print("数据错误，请重新输入")
# 判断用户输入的数值是否是质数(新版) 结束

# 水仙花数 开始
# i = 100
# sum = 0
# while i < 1000 :
#     b = (i // 100) ** 3
#     s = ((i % 100) // 10) ** 3
#     g = (i % 10) ** 3
#     if i == b + s + g :
#         print(i)
#         sum += 1
#     i += 1
# print("100~1000以内的水仙花数有",sum,"个")
# 水仙花数 结束


# 等腰三角形 开始
# i = 0
# p = 5
# while i < 5:
#     print(" " * p,end="")
#     p -= 1
#     j = 0
#     while j < i+1 :
#         print("* ",end="")
#         j += 1
#     print()
#     i += 1
# 等腰三角形 结束

# 100以内所有的质数(判断是否不能被(i-2)个数整除) 开始
# i = 2
# num = 0
# add = 0
# while i < 100 :
#     j = 1
#     sum = 0
#     while j < i :
#         if i % j != 0 :
#             sum += 1
#         j += 1
#     if sum == i - 2 :
#         print(i)
#         sum = 0
#         num += 1
#         add += i
#     i += 1
# print("100以内的质数共有",num,"个,和为",add)
# 100以内所有的质数(判断是否不能被(i-2)个数整除) 结束


# 打印99乘法表 开始
# i = 1
# while i <= 9 :
#     t = 1
#     while t < i+1 :
#         print(t,"*",i,"=",t * i," ",end="")
#         t += 1
#     print()
#     i += 1
# 打印99乘法表 结束


# 打印99乘法表(格式化字符串版) 开始
# i = 1
# while i <= 9 :
#     t = 1
#     while t < i+1 :
#         print(f"{t}*{i}={t*i} ",end="")
#         t += 1
#     print()
#     i += 1
# 打印99乘法表(格式化字符串版) 结束

# 100以内所有的质数(判断是否只能被小于i的两个数整除) 开始
# i = 2
# num = 0
# add = 0
# while i < 100 :
#     j = 1
#     sum = 0
#     while j <= i :
#         if i % j == 0 :
#             sum += 1
#         j += 1
#     if sum == 2 :
#         print(i)
#         sum = 0
#         num += 1
#         add += i
#     i += 1
# 100以内所有的质数(判断是否只能被小于i的两个数整除) 结束

# 100以内所有的质数(判断i是否可以整除2到i之间的数) 开始
# from time import *
# kais = time()
# i = 2
# while i < 100 :
#     j = 2
#     flag = True
#     while j < i:
#         if i % j == 0 :
#             flag = False
#         j += 1
#     if flag == True :
#         print(i)
#     i += 1
# end = time()
# print(end - kais)
# print("100以内的质数和为：",sum)
# print("100以内的质数有",num,"个")
# 100以内所有的质数(判断i是否可以整除2到i之间的数) 结束


# 100以内所有的质数(判断j是否小于i的二分之一，并且判断i是否可以整除2到i之间的数) 优化版 开始
# from time import *
# kais = time()
# i = 2
# while i < 100000 :
#     j = 2
#     flag = True
#     while j <= i**0.5:#求取i的平方根(一个数的因数最多到他的平方根，再往后就会重复，所以不需要再计算往后的数【此时需要让就<=i，否则会选取不到最大的平方根】)
#         if i % j == 0 :
#             flag = False
#             break
#         j += 1
#     if flag == True :
#        pass
#     i += 1
# end = time()
# print(end - kais)
# 100以内所有的质数(判断j是否小于i的二分之一，并且判断i是否可以整除2到i之间的数) 优化版 开始 

