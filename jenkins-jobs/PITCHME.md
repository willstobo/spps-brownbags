[comment]: <> (https://gitpitch.com/willstobo/spps-brownbags/master?p=jenkins-jobs)
# Jenkins
The link between environments
---
## Contents
- Jenkins
- Deployment Pipelines
- Pega Deployment Jobs
- Pega Deployment Pipeline
- Qlik Deployment Jobs
- Reporting Template Deployments
- Bitbucket Webhooks
---
## Jenkins
Jobs are configured with 
- Parameters
- Triggers
- Build Scripts
- Post Build Actions
---
## Jenkins
The different types of jobs we have 
- AutomationTesting
- Deploy_jobs
- DevOps
- FBPR
- Initialisation_jobs
---
## Deployment Pipelines
![Pipelines for our major applications](jenkins-jobs/DeploymentPipelines.png)
---
## Pega Deployment Jobs
- Parameters: Product Key, Version Number and Connection Details
- Triggers: Manual
- Build Scripts: Bash scripts using prpcUtils pega script
+++
## Pega Deployment Pipeline
Groovy Script linking existing jenkins jobs together
+++
## Qlik Deployment Jobs
- Parameters: App Name, Version Number, Stream Name
- Trigger: Manual
- Build Scripts: Python scripts using Qlik api's
+++
## Reporting Template Deployments
- Parameters: Branch Name
- Trigger: BitBucket Webhook
- Build Scripts: bash scripts using aws cli
+++
## Bitbucket Webhooks
Notify Jenkins when a change has been made
---
# Questions?
---
# Time To Vote!
- 2 votes each
- Must be two different talks