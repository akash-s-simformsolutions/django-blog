FROM python:3.8.7-slim-buster

RUN groupadd --gid 1000 python \
  && useradd --uid 1000 --gid python --shell /bin/bash --create-home python

EXPOSE 9091

WORKDIR /app

COPY requirements.txt ./

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

RUN chown -R python:python /app

USER python
