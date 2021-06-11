echo $1
if [ "$1" = "bo" ]
then
    docker build -t vp-cap/frontend .
elif [ "$1" = "br" ]
then
    docker build -t vp-cap/frontend .
    docker stop frontend && docker rm frontend
    docker run --name frontend -p 8888:80 vp-cap/frontend
else
    docker stop frontend && docker rm frontend
    docker run --name frontend -p 8888:80 vp-cap/frontend
fi
