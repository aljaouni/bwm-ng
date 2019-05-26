module.exports={
  normalizeErrors: function (errors) {
    let normalizeErrors = [];
    for(let proparty in errors){
      if(errors.hasOwnProperty(proparty)){
        normalizeErrors.push({title: proparty, detail: errors[proparty].message})
      }
    }
    return normalizeErrors;
  }
}
