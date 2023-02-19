FROM denoland/deno:latest

RUN apt update && apt -y install exa bat strace sysstat
# RUN npm install -g typescript ts-node @types/jest jest ts-jest
RUN echo "alias ll='exa -la'" >> /root/.bashrc

WORKDIR /root/atcoder_typescript/src

CMD ["/bin/bash"]
