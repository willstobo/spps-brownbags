[comment]: <> (https://gitpitch.com/willstobo/spps-brownbags/master?p=how-we-build-environments)
# Building Environments
Lifting the fog on infrastructure as code.
---
## So how do we build environments? 
- Infrastructure as Code!
+++
### LETS
## FIND
# OUT
+++
## What is IaC?
@ul
- One method of managing infrastructure resources.
- Defining and configuring infrastructure resources from a file.
- Requires:
    - The config file 
    - A service to read and provision resources based on that file 
@ulend
+++
## What's so good about IaC? 
@ul
- Coding Practices for infrastructure
- Source Control
- DevOps
@ulend
---
## So what do we use here at PTV?
- AWS CloudFormation
---
## What? Why CloudFormation?
@ul
- AWS Service to provision AWS resources.

- Cloud Magic
@ulend
+++
## How does it work?
@ol
- Create a CloudFormation Template (JSON / YAML)
- Tell CloudFormation to build a stack using the template.
- Acquire AWS Resources!
@olend
+++?code=how-we-build-environments/test.js&title=1. What is a CloudFormation template?
@[25-27]test.js First Section of Code
+++
## 2. CloudFormation Stacks? What are those?
- Such management
- Much wow
---
## 3. What stacks have we got?
Environments for days
16 Per Env
41 for Blank AWS
