import React, { useState } from 'react';

import '../../assets/styles/coronafaqs.scss';
import QuestionPanel from './QuestionPanel';

function CoronaFAQs() {
  const [questions] = useState([
    { question: 'How long is the current lockdown?', answer: 'The current lockdown is 21 days and is expected to end on 5th May' },
    {
      question: 'Can I use vodka as hand sanitizer?',
      answer:
        'Please don’t. The CDC advises using hand sanitizer that contains at least 60% alcohol. Vodka typically contains between 35% and 46% percent alcohol',
    },
  ]);
  return (
    <div className="CoronaFAQs">
      <div>
        <p>Answers to some frequently asked questions related to the coronavirus</p>
        {questions.map((question, index) => (
          <div key={index}>
            <QuestionPanel question={question} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoronaFAQs;
