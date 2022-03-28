from ast import If


print('欢迎来到唐僧大战白骨精！！!')
player = input('''
    请选择角色[1-2]：
    \t 1.唐僧
    \t 2.白骨精
''')
player_life = 2
player_attack = 2
boss_life = 10
boss_attack = 5
player_choose = ''
if player == '1':
    print('恭喜你，你将以唐僧的身份进行游戏！')
    print(f'您的生命值为：{player_life},您的攻击力为：{player_attack}')
    while True:
        print('-'*65)
        player_choose = input('''
            请选择您要进行的操作：
            \t 1.练级
            \t 2.打boss
            \t 3.逃跑
        ''')
        if player_choose == '1':
            player_attack += 2
            player_life += 2
            print('-'*65)
            print(f'您的生命值为：{player_life},您的攻击力为：{player_attack}')
        elif player_choose == '2':
            boss_life -= player_attack
            print('-'*65)
            print(f'您的生命值为：{player_life},您的攻击力为：{player_attack}')
            if boss_life <= 0:
                print('-'*65)
                print(f'您攻击了白骨精，白骨精受到了您{player_attack}伤害，剩余{boss_life}滴血')
                print('恭喜您！通关了')
                break
            else :
                print('-'*65)
                print(f'您攻击了白骨精，白骨精受到了您{player_attack}伤害，剩余{boss_life}滴血')
                print('-'*65)
                player_life -= boss_attack
                print(f'您收到了白骨精{boss_attack}点伤害，剩余{player_life}点血')
                if player_life <= 0:
                    print('-'*65)
                    print('很遗憾，你死了!')
                    break
        elif player_choose == '3' :
            print('逃跑成功！！！')
        else:
            print('输入有误，请重新输入！')
else :
    print('恭喜你，你将以唐僧的身份进行游戏！')
    print(f'您的生命值为：{player_life},您的攻击力为：{player_attack}')
    while True:
        print('-'*65)
        player_choose = input('''
            请选择您要进行的操作：
            \t 1.练级
            \t 2.打boss
            \t 3.逃跑
        ''')
        if player_choose == '1':
            player_attack += 2
            player_life += 2
            print('-'*65)
            print(f'您的生命值为：{player_life},您的攻击力为：{player_attack}')
        elif player_choose == '2':
            boss_life -= player_attack
            print('-'*65)
            print(f'您的生命值为：{player_life},您的攻击力为：{player_attack}')
            if boss_life <= 0:
                print('-'*65)
                print(f'您攻击了白骨精，白骨精受到了您{player_attack}伤害，剩余{boss_life}滴血')
                print('恭喜您！通关了')
                break
            else :
                print('-'*65)
                print(f'您攻击了白骨精，白骨精受到了您{player_attack}伤害，剩余{boss_life}滴血')
                print('-'*65)
                player_life -= boss_attack
                print(f'您收到了白骨精{boss_attack}点伤害，剩余{player_life}点血')
                if player_life <= 0:
                    print('-'*65)
                    print('很遗憾，你死了!')
                    break
        elif player_choose == '3' :
            print('逃跑成功！！！')
        else:
            print('输入有误，请重新输入！')
