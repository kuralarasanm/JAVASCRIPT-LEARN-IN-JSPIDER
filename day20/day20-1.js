class InstagramUser{
    constructor(username,followers,following,posts,location,relationshipstatus){
            this.username=username
            this.followers=followers
            this.following=following
            this.posts=posts
            this.location=location
            this.relationshipstatus=relationshipstatus
    }
    fulldetails=()=>`the username is ${this.username} who is located in ${this.location} ,has ${this.followers} followers and ${this.following} and is currently `

    useractivity=()=>{
        if (this.posts<=100) {
            // console.log('user is inactive');
            return `user is inactive`
        } else if(this.posts>=500) {
            // console.log('user is addicted');
            return `user is addicted`
        }else{
            // console.log('user is active');
            return `user is active`
        }
    }

    userstatus=()=>{
        if(this.relationshipstatus=='single'){
            return this.fulldetails()
        }else{
            return `never mind`
        }
    }

}

let instagramUser=new InstagramUser(Kuralarasan,600,100,50,dharmapuri,feelings)

console.log(InstagramUser.fulldetails());



