import subprocess
import os
from sys import version_info

py3 = version_info[0] > 2

if py3:
    input_fnc = input
else:
    input_fnc = raw_input

init_git = input_fnc('Initiate new git repository? [YES][no]')

if init_git.lower() == 'no':
    pass
else:
    subprocess.call(['git', 'init'])


install_npm = input_fnc('Install npm dependencies? [YES][no]')

if install_npm.lower() == 'no':
    pass
else:
    subprocess.call('npm i', shell=True)

if init_git.lower() == 'no':
    pass
else:
    initial_commit = input_fnc('Create initial commit? [YES][no]')

    if initial_commit.lower() == 'no':
        pass
    else:
        subprocess.call(['git', 'add', './'])
        subprocess.call(['git', 'commit', '-m', '"Initial Commit"'])

    print('Adding remote origin {{cookiecutter.repo_url}}...')
    subprocess.call(['git', 'remote', 'add', 'origin', '{{ cookiecutter.repo_url }}'])

    create_upstream = input_fnc('Create upstream to master and make initial push? [YES] [no]')

    if create_upstream.lower() == 'no':
        pass
    else:
        subprocess.call(['git', 'push', '-u', 'origin', 'master'])

