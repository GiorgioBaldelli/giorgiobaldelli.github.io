---
layout: post
title:  "Ansible: Hello World Playbook"
date:   2022-05-24 08:30:45 +0100
categories: notes
tags:
- devops
show_excerpts: true
published: true
---

After installing ansible, the easiest way to get started is to run a typical "hello world" playbook. In short, playbooks are a set of declarative instructions that tell a defined host what to execute. Ansible allows us to write humanly readable declarative instructions using yml syntax to define tasks to automate.

Let's try to simply output "Hello World" on our local machine:

```
ansible-hello-world/ 
├── inventory 
└── playbook.yml
```

The inventory file lists a list of target machines on which we would like to run our playbook. In our case, it's `localhost` since we're running the playbook on our own machine.

inventory:
```
[target]
localhost
```

The playbook uses declarative language to instruct the machine about what to do. In this given case, we're defining two tasks. The first task is named `Hello World!` and it simply outputs the debug message `Hello World!`.

The second task creates a `hello_world.txt` file in our working directory and writes two lines of content to the newly created file:

playbook.yml:
```
---
- hosts: localhost
  connection: local
  tasks:
    - name: Hello World!
      debug:
        msg: "Hello World!"
    - name: Ansible create file with content example
      copy:
        dest: "hello_world.txt"
        content: |
          Hello
          World!
```

To run the playbook, we run the following command:

```bash 
~/ansible-hello-world$ ansible-playbook -i inventory playbook.yml
```

This should be the outcome that you see in your console:


```
PLAY [localhost] ***********************************************************************************************************************************************************************************

TASK [Gathering Facts] *****************************************************************************************************************************************************************************
[WARNING]: Platform darwin on host localhost is using the discovered Python interpreter at /usr/bin/python, but future installation of another Python interpreter could change the meaning of that
path. See https://docs.ansible.com/ansible/2.10/reference_appendices/interpreter_discovery.html for more information.
ok: [localhost]

TASK [Hello World!] ********************************************************************************************************************************************************************************
ok: [localhost] => {
    "msg": "Hello World!"
}

TASK [Ansible create file with content example] ****************************************************************************************************************************************************
changed: [localhost]

PLAY RECAP *****************************************************************************************************************************************************************************************
localhost                  : ok=3    changed=1    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0
```

And there you go, this is how you run a simple hello world playbook to get started with ansible. Have fun automating all things :)
