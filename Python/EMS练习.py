arr = ['王礼壮', '牛如意', '张志豪', '梁正', '张双龙']
while True:
    user_choose = input('''
    欢迎来到EMS员工管理系统，请操作[1-4]：
        \t 1.查询员工
        \t 2.删除员工
        \t 3.添加员工
        \t 4.退出系统
    ''')
    if user_choose == "1":
        print('-'*65)
        print(arr)
    elif user_choose == "2":
        print('-'*65)
        name = input('请输入员工姓名：')
        if name != '':
            arr.remove(name)
            print(arr)
        else:
            print('数据错误，请重新操作！')
    elif user_choose == '3':
        print('-'*65)
        user_input = input('请输入员工姓名：')
        arr.append(user_input)
        print(arr)
    elif user_choose == '4':
        break
    else:
        print('-'*65)
        print('输入错误，请重新输入！！！')
