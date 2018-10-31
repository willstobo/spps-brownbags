[comment]: <> (https://gitpitch.com/willstobo/spps-brownbags/master?p=how-we-build-environments)
# Building Environments
Lifting the fog on infrastructure as code.
---
## So how do we build environments? 
+++
### LETS
## FIND
# OUT
+++
## What is Infrastructure as Code?
@ul
- Method of managing infrastructure resources.
- Define and configure resources from a file.
- Using:
    - A config file 
    - A service to read and provision resources based on that file 
@ulend
+++
## What's so good about IaC? 
@ul
- Coding Practices for infrastructure
- Source Control
- DevOps and automation
@ulend
---
## So what do we use here at PTV?
AWS CloudFormation!
---
## What? Why CloudFormation?
@ul
- AWS Service to provision AWS resources.
- Each cloud provider offers their own service.
@ulend
+++
## How does it work?
@ol
- Create a CloudFormation Template (JSON / YAML)
- Tell CloudFormation to build a stack using the template.
- Acquire AWS Resources!
@olend
+++?code=how-we-build-environments/test.template&title=1. What is a CloudFormation template?
@[4-6]test.template
@[7-9]test.template
@[10-12]test.template
@[13-15]test.template
@[16-18]test.template
@[19-21]test.template
+++
## 2. CloudFormation Stacks? 
What are those?
@ul
- Logical Grouping of Resources
    - For creation and deletion 
- Provides visibility of provisioned resources
- Highlights changes prior to updating
- Automated rollback
@ulend
+++
## 3. What stacks have we got?
![Environments for days](how-we-build-environments/ProdEnvStacks.png)
---
## That was how many?
- 41 Stacks to create SPPS
    - From an empty AWS account
- 15 Stacks per shared environment 
    - ST, STRPT, ST-Auto, UAT5, UAT6, UAT7
---
# Questions?
