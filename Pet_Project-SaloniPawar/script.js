window.onload = function () {
    var quoteText = document.getElementById("quote-text");
    var quoteMood = document.getElementById("quote-mood");
    var moodSelect = document.getElementById("mood-select");
    var newQuoteBtn = document.getElementById("new-quote-btn");
    var clearBtn = document.getElementById("clear-btn");
    var addQuoteBtn = document.getElementById("add-quote-btn");
    var newQuoteContainer = document.getElementById("new-quote-container");
    var newQuoteInput = document.getElementById("new-quote");
    var submitQuoteBtn = document.getElementById("submit");
    var errorLabel = document.getElementById("error-label");

    // Store quotes in an object by different moods
    var quotes = {
        Happy: ["Happiness is not by chance, but by choice. - Jim Rohn", "Happiness is when what you think, what you say, and what you do are in harmony. - Mahatma Gandhi", "The only way to do great work is to love what you do. - Steve Jobs", "The best way to predict the future is to create it. - Peter Drucker", "The greatest happiness you can have is knowing that you do not necessarily require happiness. - William Saroyan"],
        Motivated: ["Believe you can, and you're halfway there. - Theodore Roosevelt", "The only place where success comes before work is in the dictionary. - Vidal Sassoon", "Your time is limited, don't waste it living someone else's life. - Steve Jobs", "The only way to achieve the impossible is to believe it is possible.", "The road to success and the road to failure are almost exactly the same. - Colin R. Davis"],
        Calm: ["Do not let the behavior of others destroy your inner peace. - Dalai Lama", "There is a calmness to a life lived in gratitude, a quiet joy. - Ralph H. Blum", "The mind is like water. When it's turbulent, it's difficult to see. When it's calm, everything becomes clear. - Prasad Mahes", "Calm mind brings inner strength and self-confidence, so that's very important for good health. - Dalai Lama", "Calmness is the cradle of power. - Josiah Gilbert Holland"],
        Sad: ["Tears are words that need to be written. - Paulo Coelho", "The walls we build around us to keep out the sadness also keep out the joy. - Jim Rohn", "Grief is not as heavy as guilt, but it takes more away from you. - Veronica Roth", "Don't cry because it's over, smile because it happened. - Dr. Seuss", "Behind every sweet smile, there is a bitter sadness that no one can ever see and feel. - Tupac Shakur"]
    };
    
    // Function to display a new random quote based on the selected mood
    function displayNewQuote() {
        var selectedMood = moodSelect.value;
        var moodQuotes = quotes[selectedMood];
        var randomIndex = Math.floor(Math.random() * moodQuotes.length);
        var randomQuote = moodQuotes[randomIndex];

        // Update HTML content with the selected quote and mood
        quoteText.innerHTML = randomQuote;
        quoteMood.innerHTML = "Mood: " + selectedMood;

        // Hide the new quote area
        newQuoteContainer.style.display = 'none';

    }

    // Event listener for "New Quote" button
    newQuoteBtn.addEventListener('click', displayNewQuote);

    // Event listener for "Clear" button
    clearBtn.addEventListener("click", function () {
        moodSelect.selectedIndex = 0;
        quoteText.innerHTML = '';
        quoteMood.innerHTML = '';
    });

     // Event listener for "Add New Quote" button
    addQuoteBtn.addEventListener('click', function () {

    // Show the new quote area
    newQuoteContainer.style.display = 'block';
    
    });

    // Event listener for the 'Submit' button inside the new quote container
    submitQuoteBtn.addEventListener('click', function () {
        var newQuote = newQuoteInput.value;
        var selectedMood = moodSelect.value;

        
        if (newQuote && newQuote.trim() !== '') {
            // Save the new quote
            quotes[selectedMood].push(newQuote);

            // Hide the new quote area
            newQuoteContainer.style.display = 'none';

            // Display the updated quote
            displayNewQuote();

            // Clear the input field
            newQuoteInput.value = '';

            // Clear the error label and hide it
            errorLabel.innerHTML = '';
            errorLabel.style.display = 'none';

        } else {
            errorLabel.innerHTML = "Please enter a valid quote";
            errorLabel.style.color = 'red';
            
            // Show the error label
            errorLabel.style.display = 'block';
        }
    });

    // Display quote on page load
    displayNewQuote();
};
