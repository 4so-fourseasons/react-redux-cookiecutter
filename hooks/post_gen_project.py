import subprocess
import os


subprocess.call(['git', 'init'])
subprocess.call(['git', 'checkout', '-b', 'dev'])
subprocess.call(['git', 'remote', 'add', 'origin', '{{ cookiecutter.repo_url }}'])

install_npm = raw_input('Install npm dependencies? [YES][no]')

if install_npm.lower() == 'no':
    pass
else:
    subprocess.call(['npm', 'i'])
