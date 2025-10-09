# Work Experiences

## NewPyme

During my internship at **NewPyme**, I worked primarily with the **LAMP stack** in both development and system administration. One of my first tasks was to develop a **user login module** for the company's website, followed by creating a **financial tool in PHP** for internal use, although I no longer remember all the details of that project. I also troubleshooted **Linux issues** and made small system improvements.

On the infrastructure side, I set up **Let's Encrypt SSL certificate autorenewal** using **Certbot**. This involved installing and configuring it, scheduling `certbot renew --dry-run` to run twice daily for validation, and making sure certificate renewal worked without manual intervention.

The internship also introduced me to **web security fundamentals**, particularly how to prevent **SQL injection** and **XSS** attacks. I applied these principles to my development work, which helped me understand both database and frontend security concerns in practice.

Over the course of the internship, I became more confident working **independently**, solving problems as they arose, and paying attention to **security** when building features. The experience gave me a solid foundation in the **LAMP stack**, improved my **problem-solving skills**, and reinforced the importance of security in web development.

## WebHelp

I was part of the **PaaS team in GCP**, handling **serverless services** and **storage solutions** across a wide range of products. My main focus was on **App Engine, Cloud Functions, Cloud Run, Datastore, Cloud SQL, Cloud Spanner, Cloud Storage, and BigQuery**, while also assisting with **Kubernetes (GKE), Terraform, Virtual Machines, and Pub/Sub**. I provided **enterprise-level support to major clients including Spotify, Booking, and BBVA**, managing customer interactions across different business domains and time zones.

We worked under **strict SLAs**, with a required first meaningful reply—beyond "I'm looking into it"—within **2, 4, or 8 hours** depending on priority, and occasionally as fast as **15 minutes for premium clients**. These cases could range from **simple API usage questions** to **complex corner cases** tied to **internal bugs**. Many issues required me to act as the **bridge between customers and engineering teams**, carefully considering the customer's business context before advising or implementing a solution.

A typical investigation involved reviewing recent changes internally and on the customer's side, correlating dates, checking how many users were affected, and searching for similar cases across the customer base and community reports. Sometimes, the public status page already confirmed the issue, in which case my role was to communicate clearly and close the loop.

**Weekend on-call shifts** meant managing incidents independently, occasionally consulting engineers in Zurich for **P1 cases**. I followed a structured approach: assessing impact, identifying scope, correlating logs, reconstructing timelines, performing **root cause analysis**, reproducing the issue, and prioritizing based on severity.

Much of my technical work involved **performance optimization and troubleshooting**:

- **Query tuning in Cloud Spanner**  
- Investigating and fixing **memory leaks**  
- Identifying **bottlenecks** such as CPU, memory, I/O, and disk throttling  
- Managing **connection pools** effectively  
- Applying the right **caching strategies** (FIFO, LRU, MRU) I also implemented **granular IAM permissions**, handled **encryption at rest and in transit** with **KMS**, and optimized access controls for better security.

Beyond incident resolution, I developed **custom scripts and automations** to interact with **GCP APIs**, integrated **REST APIs** with GCP services, and applied **Terraform** for **infrastructure as code**. I hosted my own personal website on **App Engine**, which helped me develop a deeper understanding of service configurations and limitations.

**Security** was also part of the job: I handled **PII incidents**, filed reports, and reassured customers about their data security. I ensured **encryption best practices** were followed and optimized **IAM roles** to follow the principle of least privilege.

The workload was **unpredictable**—quiet one day, hectic the next with up to ten cases. We didn't know every product inside out, so **learning on the fly** was part of the role. I provided consultations on **AWS vs GCP comparisons**, database choices (often explaining why Cloud SQL lacked features like cross-region replication compared to Cloud Spanner), **performance tuning**, and **security best practices**. I made a point to **document solutions thoroughly** and share knowledge with the team, knowing the value of well-maintained internal documentation.

While the role was **technically rewarding**, giving me a wide breadth of experience across **GCP services**, I found the **lack of a broader mission or team goal beyond case resolution** demotivating. It reinforced for me the importance of having clear team objectives and shared goals, not just technical expertise, for long-term success and satisfaction.

## Planeta Huerto

**Planeta Huerto** was a **local e-commerce company** I joined after moving back from Barcelona to Alicante. I stayed a total of **44 days** because the environment was **toxic** from day one. There was **no onboarding** — just a couple of links thrown my way and a "we need this" attitude. Communication was poor, replaced by pressure and condescending behaviour, which I hadn't experienced in Barcelona. I also found **racist remarks in Slack's chat history** from before I joined, which made me think, "I don't deserve nor belong here." I started looking for something else in a city that wasn't as big as Barcelona but not as small as Alicante either.

Even in that short time, I managed to get a lot done. They had created a **Kubernetes cluster** and deployed something there without any documentation, so I recreated it, spotted a serious bug, and wrote proper docs. I started by **troubleshooting a misconfigured GKE cluster** and fixing it. I **wrote per-branch Bitbucket pipelines** and worked on the **migration from on-premises to the cloud**, creating networking with **VPC, subnetting, Cloud NAT, and a Bastion host**. Since **security through obscurity** isn't enough, I made sure to **harden the setup** as much as possible — limiting access, testing logs, enabling **MFA**, reducing the attack surface by shutting it down when not in use, and integrating logging for auditing.

It was my **first time using Ansible**, and I used it to **propagate public SSH keys** to new VMs. I also **set up Jenkins slaves**, implemented automated cleanup of old **Docker images/containers**, and removed VM leftovers. They used **ELK**, so I tweaked some configurations and set up monitoring operations through Jenkins. As always, I pushed for **documentation** — that's when they noticed my **attention to detail and quality**.

Using **Helm**, I installed **Prometheus** and **Kibana**. We worked entirely in the **cloud using Bitbucket** (integrated with Jira and Confluence SaaS). For error aggregation in PHP, they used **Bugsnag** (integrated with Slack for real-time alerts), and for infra monitoring — **Grafana** fed by Prometheus metrics. **Kafka** was in place to manage orders, stock, shipments, campaigns, pricing, and other **event-driven processes**.

One major incident was a **Redis connection issue** in **Cloud Memorystore**. There were **no alerts** for Redis problems, so no one noticed memory filling up until **users got other people's shopping carts**. I suspected a **bad caching policy** from the start. We **increased capacity** to mitigate quickly, applied the fix (switching to a proper eviction policy), and monitored — it held. **MTTR** was **5–10 minutes**; **MTTD** was terrible. The process was **reactive, not proactive**, and the **SLO broke**. I documented the incident, configured a new **alerting system** to track Redis memory usage, and created **runbooks** to prevent recurrence.

I improved tooling by testing and documenting better approaches, like **docker-credential-gcr** and **gsutil rsync** instead of older methods. I wrote a **small Groovy script for Jenkins** to find jobs in a given time range. For deployments, I used **Docker** and **Docker Compose** for **PHP, MySQL, Nginx, and Mailhog**. I also **configured ELK, Prometheus, kube-dns, Stackdriver agent**, and managed **SSL certificate updates** for services like Jenkins.

I actively supported colleagues through **Slack** and maintained flexibility in my role, adapting to a range of infrastructure needs. The main objective was to **prepare for more clients** and have a **reliable, resilient system**. Despite the environment's challenges, I documented undocumented systems, fixed critical bugs, and implemented secure, cloud-based infrastructure — gaining valuable experience in **cloud migration, security hardening, and incident management** along the way.

## Flowable

At **Flowable**, **automation** was a constant theme. Early on, I noticed colleagues spending time on **repetitive Jira user requests**, so I decided to improve the process. I began with simple **Python scripts** that interacted with **Jira's REST API**, **Azure's REST API**, or triggered existing **PowerShell scripts**. These could read the Jira queue—issues, state, assignee, creation date, comments—and trigger workflows for **user onboarding/offboarding, license changes, CMDB updates, Azure Resource Group creation, Kubernetes namespace provisioning**, and even full **Jira Service Desk setups** for internal teams. Over time, these evolved into a **framework deployed on AKS** as a **CronJob**, running periodically in production and selecting the right workflow for each request type.

I consolidated messy **Bash and PowerShell scripts** into Python, using a PLP bot account to execute workflows. When tasks needed PowerShell cmdlets, I connected via SSH to a VM. I developed and maintained the **Workday integration**, largely written in PowerShell, to create, manage, and deactivate accounts—handling reset processes that varied by country and legal entity. I proactively took over **license handling** without being asked, ensuring credentials were never exposed, even in test branches. I kept **documentation, DR plans, and procedures** aligned, always aiming for consistency and a bigger-picture view.

For deployment, I wrote a **GitLab CI/CD pipeline** to build a Docker image, update the CronJob manifest with the new tag, and apply it via **Flux**, later replaced by **Argo CD**. I frequently refactored to simplify workflows and remove redundant steps. Observing the Jira queue gave me further automation ideas—such as adjusting **third-party license allocations** to cut unused costs, flagging **CMDB inconsistencies**, and clearing bottlenecks from undefined processes.

When **Workday** was introduced, I added logging, scheduled tasks, and monitoring—using **Windows exporter's exit code monitoring**, **Prometheus alerts**, and **runbooks** for troubleshooting. I created missing alerts, completed runbooks, built **Grafana dashboards**, optimized Jira queues, and documented processes. I ran **KTs**, mentored teammates, interviewed candidates, and coached others on how to interact effectively with internal customers.

I also tackled **alert fatigue**. Noticing that **Opsgenie alerts** were often ignored, I built a **Python Flask webhook** to process them—removing duplicates, creating Jira tickets with runbook links, priorities, and error messages, and auto-assigning them to the right people through Jira webhooks, with **Nginx** securing the endpoint.

Beyond automation, I migrated **Azure Postgres to Kubernetes Postgres Operator**, moved **SonarQube and Nexus** to a different cluster for consistency, secured apps with **Nginx basic auth**, enforced consistency via **ArgoCD**, and applied infrastructure changes through **Ansible**. I cleaned up **CMDB imports** and ensured that backups—previously unmonitored—were now tracked.

While reviewing Workday logs, I discovered multiple **security issues**: accounts reactivated on a Sunday, a contractor wrongly added to an internal group and never offboarded, and terminated users being reactivated. I fixed each, verified no suspicious activity, updated **security controls** to prevent recurrence, and documented the changes.

In **incident management**, I resolved Azure disk attachment issues in Production SonarQube, drained faulty Kubernetes nodes, investigated **SNAT port exhaustion** with a teammate, worked with Azure support, posted updates to the **Status Page**, and wrote a **blameless postmortem** for a major **AAD deletion incident**. I handled **Sidekiq incidents** in GitLab and conflictive situations with customers.

For upgrades, I suggested improvements to **change management policy**, handled **Kubernetes upgrades** via Terraform, and upgraded **GitLab, SonarQube, and Nexus IQ** during maintenance windows. I ran multiple **BCM backup/restore tests**, wrote the procedures, and suggested enhancements. I introduced **Kyverno** to replace PodSecurityPolicy, extended Flowable's **Helm Chart**, made **Postgres Operator HA** across zones, and addressed **PenTest findings**.

I also worked on smaller but impactful changes: reducing Opsgenie noise, improving Jira automations and templates, documenting Salesforce processes from scratch, improving Windows ST monitoring, and deploying monitoring tools like **Blackbox** and **pv-exporter**.

Despite significant technical contributions, there were challenges—frustrating management decisions, **lack of teamwork**, poor prioritization, insufficient manpower, minimal KT/KA time, neglected operational tasks, outdated infrastructure, and low morale. I often fixed problems for others without supervision, carrying much of the load but learning less than I wanted. My motivation comes from work that makes a meaningful impact, so I aimed to focus more on **CI/CD, IaC, and automation** rather than pure system administration or networking.

Throughout my time there, I made a point of **listening, observing, and acting without needing supervision**, removing obstacles for the team and demonstrating that proactive, well-documented process improvements could have both technical and cultural impact.

## Unit4

At **Unit4**, my first responsibility was **automating internal customer onboarding procedures** that were left unfinished and in poor shape. What I found was **inconsistencies, spaghetti code, lack of documentation, redundancies, and duplicated logic**. I cleaned up the approach and developed the rest as an **Azure Pipeline**.

It quickly became clear that **repository hygiene** was an issue. Many repos were cluttered with **old, badly written pipelines, leftover testing code, obsolete scripts for non-existent products, empty files**, and even **DLLs stored in source folders**. I wrote a **Bash and Git CLI script** to identify file owners and aid in cleanup. The idea was well received but, like many things here, it was never acted upon — there's a recurring pattern of recognising good proposals but not following through.

The way we work in "Scrum" is **Scrum on paper only**. When I joined, there were **no retrospectives** until I specifically asked. **Sprint reviews, planning, and dailies** are almost indistinguishable from each other, and **user stories or tasks often have no descriptions at all**. In retrospectives, a manager once replied with "**I wasn't listening**," and documentation requests often get the answer "**It's in our mind**." The **onboarding process was chaotic**, marked by **finger-pointing and no ownership**.

Cameras are rarely turned on, even by managers, and several colleagues have openly admitted to **doing chores during calls**. After a year, I still **don't know what some people actually work on**, because there's **zero transparency**.

When I became the **Ops contact for Telemetry**, my first meeting with another team caught me off guard. They asked **architectural questions** I couldn't answer because **there was no documentation**, my onboarding buddy wasn't present, and my manager hadn't joined either. Yet they still expected me to provide details for an **incomplete service I had never touched**.

My own onboarding email was **forgotten by my manager**, and whatever documentation existed was **outdated and scattered**. I was involved in an **AKS migration**, but the approach was flawed—**infrastructure code was mixed with service code**. My specific contribution was **documenting roles and cluster roles** for the migration. The work was further slowed by the absence of **shared documentation, standardised analysis, or consistent communication practices**.

**Scrum here is essentially meaningless**: sprints often have **no deliverables**, the backlog is **never cleaned**, and some team members have admitted they **don't even understand Agile**. The **DevOps Engineer** title doesn't match reality—teams work in **complete silos**. I've been told to **deploy services** to multiple environments without being involved in their development and with **permissions blocking basic tasks** like creating repositories or viewing Azure app registrations.

Currently, I'm **automating onboarding for another service**, but the codebase is **years-old and poorly written**, and it sits in release pipelines that aren't fit for the task. When I suggested better tools like **Azure Logic Apps or Runbooks**, they were dismissed with "**they sucked**" — without a single documented reason. I migrated it as best as possible, but proper testing remains impossible due to **no customer or dummy data** and **no support from senior staff**.

Overall, the environment is **chaotic, leaderless, and unproductive**. There's a **culture of doing the bare minimum** unless explicitly instructed. I've identified **root causes** from day one, but **nothing changes**. The biggest problem is the **lack of communication and accountability**, making it hard to see a long-term future here.

Despite these challenges, I have maintained **professional standards**, pushed for cleaner processes, and kept advocating for proper **documentation, testing practices, and meaningful Agile adoption**. The role has reinforced for me the **critical need for organisational maturity** in successfully implementing **DevOps**.