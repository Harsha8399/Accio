function linearsearch(n,target){
    for(let i=0;i<n.length;n++){
        if(n[i]===target){
            return true
        }
    }
    return false
}

n=[4,8,56,3,9,87,54,14,15]
target=15
linearsearch(n,target)