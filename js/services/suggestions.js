//A simple service that returns some demo data
app.factory('suggestions', [function(){
  return [
    {
      title: 'Free pizza at club meetings',
      description: 'Pizza party forever!',
      upvotes: 15,
      comments: [
        {
          author: 'John Doe',
          description: 'What a great idea!',
          upvotes: 5
        },
        {
          title: 'WHAT?',
          description: 'I\'m on a diet :(',
          upvotes: 2
        }
      ],
    },
    {
      title: 'End all club emails with Chuck Norris jokes',
      description: 'Chuck Norris doesn\'t make push-ups. He pushes the Earth up and down',
      upvotes: 9,
      comments: [],
    },
    {
      title: 'Retrofit water fountain with Red Bull',
      description: 'It gives you wings!',
      upvotes: 7,
      comments: [],
    },
    {
      title: 'Sing Bon Jovi\'s "Living on a Prayer" halfway through meetings',
      description: 'Uoooooooooooooooooooooooooooooh!!!!!!',
      upvotes: 3,
      comments: [],
    }
  ];
}]);  