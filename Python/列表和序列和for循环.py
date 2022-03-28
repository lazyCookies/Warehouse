# list
# python中的列表在获取其中的值时，索引可以为负数，表示从后往前取值
# 注意list在python中是一个关键字，声明变量时不要用list

# 索引
from turtle import clear


my_list = [1,2,3,4,5,6,7]
# print(my_list[-2])

# 切片
# 切片是从列表的指定起始位置截取元素到终止位置（不含终止位置的元素）
# print(my_list[0:3])

# 步长
# 步长表示取值时间隔几个元素，你就理解为1表示挨个取值，2表示中间间隔一个元素取值，以此类推
# 步长默认为1
# print(my_list[0:7:1])

# len()
# len()方法可以获取列表的长度，即有多少个元素
# print(len(my_list))

# +和*

# +可以合并列表
new_list = [1,2,3] + [4,5,6]
# print(new_list)

# *可以复制列表
two_list = [1,2,3] * 5
# print(two_list)

# in
# in用来检查指定元素是否在列表中
# print(1 in two_list)

# not in 则相反
# print(1 not in two_list)

# min()和max()，获取列表中的最小值和最大值
# print(min(my_list),' ',max(my_list))

# s.index()
# index()的使用必须在他前面指定列表,index()可以获取指定元素的索引

# 用法一，直接获取元素在列表中的索引，如果列表中没有这个元素，则报错
# print(my_list.index(3))

# 用法二，如果列表中有重复的元素，则会找此元素第一次出现的位置，index()第二个参数表示从列表的哪个位置开始查找
three_list = [1,2,3,3,3,5]
# print(three_list.index(3))
# print(three_list.index(3,4))

# 用法三，index()第三个参数表示查找的结束位置，注意：在从指定区域查找元素索引时，不包含结束位置
# print(three_list.index(3,4,6))

# count()
# count()方法用来获取元素在列表中出现的次数
print(three_list.count(3))

# 序列
# 序列是python中的一种数据结构
# 数据结构指计算机中数据存储的方式
# 序列用于保存一组有序的数据，所有的数据在序列当中都有一个唯一的位置（索引）
# 并且序列中的数据会按照添加到顺序来分配索引

# 序列的分类：
    # 可变序列(序列中的元素可以改变)：
        # 列表
    # 不可变序列（序列中的元素不可改变）：
        # 字符串(str)
        # 元组(tuple)
# 以上所有操作都是序列通用操作

# 列表中的增删改:

# 增
stu_list = [0,1,2,3,4,5,6,7,8,9]
# print(stu_list)
# stu_list[0:0] = [11,11,11]
# print(stu_list)

# 删
# del stu_list[2]
# print(stu_list)
# del stu_list[0:3]
# print(stu_list)
# stu_list[0:3] = []
# print(stu_list)

# 改
# stu_list[0] = '2'
# print(stu_list)

# 通过切片来修改列表
# 再给切片赋值时，只能使用序列
# stu_list[0:3] = '999'
# print(stu_list)
# 当设置了步长时，序列中的元素必须和切片匹配到的元素一样多
# stu_list[::2] = '55555'
# print(stu_list)

# 查已经讲过了
# 以上操作只适用于可变序列
# 对于不可变序列可以使用list()方法
# str = 'hello'
# s[2] = '2'   报错，因为字符串是不可变序列
#str = list(str)   # 此时，str已经变成了列表(可变序列)，可以修改其中的数据
# print(type(str),str)   
# 这里只是举个例子，别较真哈

# 向列表中插入元素
# append()，向列表最后添加一个元素
star_list = ['王礼壮','梁正','张志豪']
print('修改前 = ',star_list)
# star_list.append('张双龙')
# print('修改后 = ',star_list)

# insert()，向指定位置之前插入一个元素
# star_list.insert(1,'张双龙')
# print('修改后 = ',star_list)

# extent()，使用新的序列来扩展当前序列
# star_list.extend(['王帅领','梁辉'])
# print('修改后 = ',star_list)

# 序列的删除操作
# clear()，清空序列
# star_list.clear()
# print('修改后 = ',star_list)

# pop(),根据索引删除指定元素并返回指定元素
# resualt = star_list.pop(2)
# print('修改后 = ',star_list,' 被删除的元素 = ',resualt)
# 不填索引的话会删除最后一个元素
# resualt = star_list.pop()
# print('修改后 = ',star_list,' 被删除的元素 = ',resualt)

# remove()，删除指定值的元素
# star_list.remove('王礼壮')
# print('修改后 = ',star_list)

# reverse()，用来反转列表
# star_list.reverse()
# print('修改后 = ',star_list)

# sort(),对序列进行排序，不传参数默认升序排列，传入reverse = True为降序排列
num_list = [100,56,1,23,41,15,77,85,90]
print('修改前 = ',num_list)
# num_list.sort()
# print('修改后 = ',num_list)
# num_list.sort(reverse = True)
# print('修改后 = ',num_list)

# for循环
# for i in num_list:
#     print(i)

# python for循环真牛逼！