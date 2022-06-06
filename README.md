# aws-lambda-example
AWS Lambda function example

# Install & Test & Zip:

## cd to aws-lambda-example lambda folder
```
npm install
npm test
npm prune --production
zip -r aws-lambda-example.zip *
```

# Deploy to AWS

## update code
```
aws lambda update-function-code --function-name aws-lambda-example --zip-file fileb://aws-lambda-example.zip
```
## update environment variable
```
 aws lambda update-function-configuration --function-name aws-lambda-example --environment file://aws-lambda-example.env.json
 ```

 ## invoke code
```
aws lambda invoke --function-name aws-lambda-example output.json
 ```

