# Basic Backend Template

> [!NOTE]
> This is a template I created for my own projects. Feel free to modify it as you like

---

### Out of the box services

1. Identity Provider ([Zitadel](https://zitadel.com))
2. RBAC ([Cerbos](https://www.cerbos.dev))
3. Basic cerbos config files
4. Basic k8s and docker-compose config

---

#### Start on localhost

> [!IMPORTANT]
>
> ### Make sure:
>
> - You have Docker installed on your machine
> - You have renamed the `./deployments/local/auth/example.env` to `.env` and provided the required environment variables
> - You are in the `./deployments/local` folder

```shell
docker-compose up -d
```

---

#### Start on K8S Cluster

> [!IMPORTANT]
>
> ### Make sure:
>
> - You have a working kubernetes cluster (local or cloud)
> - You have `kubectl` installed
> - You are in the `./deployments/k8s` folder
> - You have provided the required environment variables in:
>   - `./deployments/k8s/cerbos/cerbos-env.yaml`
>   - `./deployments/k8s/zitadel/zitadel-env.yaml`
> - You have provided an SSL certificate in the `./deployments/k8s/nginx/nginx-ssl-cert.yaml`

```shell
kubectl apply -f cerbos/ -f nginx/ -f zitadel/
```
