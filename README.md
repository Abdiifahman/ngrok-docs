# [ngrok docs](https://ngrok.com/docs)

Source code for [ngrok docs](https://ngrok.com/docs); feel free to suggest changes and improvements to our documentation!

## Contributing

See our [Contribution Guidelines](CONTRIBUTING.md) for detailed instructions on how to help improve ngrok documentation.

## Getting Started

ngrok is built using [Docusaurus 3](https://docusaurus.io/).

The fastest and safest (isolated) way to run the documentation is with the Docker command below, then browse to http://localhost:3000/docs.

```sh
docker run --rm -p 3000:3000 -it --name=ngrokDocs -v "./:/app" -w "/app" --platform=linux/amd64 guergeiro/pnpm:20-8-alpine sh -c "apk add direnv; direnv allow; pnpm install; pnpm run start"
```

Otherwise, you can install and run everything on your local host.

Prerequisites required:

- [Node 20](https://nodejs.org/en/download)
- [pnpm 9](https://pnpm.io/installation#using-npm)
- [nvm](https://github.com/nvm-sh/nvm)

We use [direnv](https://direnv.net/) to assist you with setting up all of the required tooling.

<details>
  <summary>Prefer to install and manage the tooling yourself?</summary>

1. Install [nvm](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating) or your node version manager of choice.
2. Ensure that `node 20` is installed. With `nvm`, run `nvm install`.
3. Enable `pnpm` with `corepack`: `corepack enable pnpm`
4. Install `pnpm` with `corepack`: `corepack install`
5. Install project dependencies with `pnpm`: `pnpm install`
</details>

First, install `direnv`:

| OS     | command                 |
| ------ | ----------------------- |
| macOS  | brew install direnv     |
| ubuntu | sudo apt install direnv |

For all other OSes, see the [direnv installation guide](https://direnv.net/docs/installation.html).

Don't forget to [set up direnv integration with your shell](https://direnv.net/docs/hook.html).

Next, clone the repo and move into the directory:

```sh
git clone https://github.com/ngrok/ngrok-docs.git
cd ngrok-docs
```

Next, run:

```sh
direnv allow
```

This will install `nvm` (if not already installed) as well as set the correct `node` and `pnpm` versions for you.

Once you have the pre-requisites installed, local development happens by running:

```sh
pnpm run start
```

Our docs mostly use markdown and MDX, you can make yourself familiar with docusaurus [documentation](https://docusaurus.io/docs/en/installation) for more significant features / changes.

## Building ngrok-docs

To ensure your changes work before submitting a pr, please run the following before submission:

```
cd ngrok-docs
pnpm run fmt
pnpm run test
pnpm run typecheck
pnpm run build
```

## Testing

We use [Vitest](https://vitest.dev/) for testing. To run the tests, use:

```sh
pnpm run test
```

To run tests in watch mode during development:

```sh
pnpm run test:watch
```

## Looking for support?

For bug reports, feature request, questions and community support please ooen an issue or discussion in our [ngrok Community](https://github.com/ngrok/ngrok).
To report a problem with our documentation, please open a new [Github issue](https://github.com/ngrok/ngrok-docs/issues).
👋 أهلاً بك في ملفي الشخصي | Welcome to my Profile
أنا سلطان (SULTAN-AAA)

باحث ومطور ذكاء اصطناعي & خبير أمن سيبراني

AI Researcher @ University of Malaya | Cybersecurity Specialist

ORCID iD

🇸🇦 أبحث عن فرص في جدة	Looking for opportunities in Jeddah 🇸🇦
✍️ نبذة عني | About Me

طالب وباحث في جامعة مالايا (UM)، أجمع بين قوة الذكاء الاصطناعي وعمق الأمن السيبراني. متخصص في تطوير الأنظمة الذكية وتأمينها، مع خبرة واسعة في الاختراق الأخلاقي والدفاع الرقمي. أسعى لتوظيف تقنيات الـ AI لخدمة الحلول الأمنية والمشاريع التقنية المبتكرة في المملكة العربية السعودية.

AI Researcher at University of Malaya. I bridge the gap between AI and Cybersecurity. Specialist in developing intelligent systems and securing them, with expertise in Ethical Hacking and Cyber Defense. My goal is to leverage AI for advanced security solutions.

🚀 المهارات التقنية | Technical Skills

🧠 الذكاء الاصطناعي & البرمجة

     
🛡️ الأمن السيبراني | Cybersecurity

     
🛠 المشاريع الحالية | Projects

Project Qadr: مشروع ريادي يهدف إلى [أضف وصفاً موجزاً لجوهر المشروع، مثلاً: توفير حلول تقنية ذكية].
AI-Driven Security: أبحاث حول دمج خوارزميات تعلم الآلة في كشف التسلل (IDS) وحماية البيانات.
📊 إحصائيات GitHub | Stats

 

📞 تواصل معي | Connect with me[+60-182945341]

ORCID: 0009-0005-6414-2037
الخاص بك]
dxoom18@hmail.com: [إيميلك الرسمي]
