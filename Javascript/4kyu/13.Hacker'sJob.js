Computer.login('admin', 'asm@t1c');
process.execPath = '/system/doors32/hacked.exe';
Computer.executeCommand('create f server_files["www/data/users.db"].content', false);
file = Computer.executeCommand('run f', false);

/*
=====SOAL======
You are simple programmer but sometimes you hack sites. Today you received a task: Hack a Quark's computer and get server database.

You connected to a Quark's computer and you need to hack it.

You can use terminal to do this job. Good luck. terminal returns commands result. Use it

Some hints that i left may be useful for you =)
*/
/*
CARA ORANG LAIN
1. ======>

Computer.login("admin", "asm@t1c");
Computer.executeCommand("create _ server_user='admin';");
Computer.executeCommand("run _");
file = Computer.executeCommand("server open www/data/users.db")

2. ======>

Computer.login('admin', 'asm@t1c');
Computer.executeCommand(`create a process.fileHolder=server_files['www/data/users.db'].content;process.execPath = '/system/doors32/hacked.exe';step = 5;`);
Computer.executeCommand('run a');
file = process.fileHolder;

3. ======>
*/