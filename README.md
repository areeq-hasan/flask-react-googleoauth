# Flask / React.js + Cloud Firestore + Google OAuth2.0

### Setup Dependencies
```bash
brew update

brew install pyenv
pyenv install $(pyenv install --list | grep -v - | grep -v b | tail -1)
pyenv global $(pyenv install --list | grep -v - | grep -v b | tail -1)

brew install pipenv
pip install --user pipenv

pip install black
```

### Environment Setup
```bash
pipenv install flask
pipenv install flask_restful
pipenv shell

cd app/http/client
npx create-react-app app
```

### Local Deployment
```bash
cd app/http/client/app && npm run build && cd ../../../.. && pipenv run flask run
```

 
