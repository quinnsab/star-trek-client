// in order to talk to our api, we need a fetch. A fetch is a promise, but we are going to be more modern and use async

document.getElementById('getButton').addEventListener('click', apiRequest)

async function apiRequest(){
    const alienName = document.querySelector('input').value
    try{
        const response = await fetch(`https://star-trek-api-hw.herokuapp.com/api/${alienName}`)
        const data = await response.json()

        console.log(data)
        document.getElementById('alienName').innerText = data.speciesName
        document.getElementById('alienWorld').innerText = data.homeworld
        document.getElementById('alienFeatures').innerText = data.features
        document.getElementById('alienFacts').innerText = data.interestingFact
        document.getElementById('alienExamples').innerText = data.notableExamples
        document.getElementById('alienImage').src = data.image
        document.getElementById('alienCaption').innerText = data.speciesName
    }catch(error){
        console.log(error)
    }
}

