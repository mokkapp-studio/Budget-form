export const reviewBudget = (budget, rest) => {
    let classColor;

    if( (budget / 4) > rest ){
        classColor = 'alert alert-danger';
    } else if( (budget / 2) > rest){
        classColor = 'alert alert-warning';
    } else{
        classColor = 'alert alert-success';
    }

    return classColor;
}