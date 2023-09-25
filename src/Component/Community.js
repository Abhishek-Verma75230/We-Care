import React, { useState } from 'react';

const CommunityPage = () => {
    const [question, setQuestion] = useState('');
    const [questions, setQuestions] = useState([
        {
            id: 1,
            text: 'What are the visiting hours for ICU?',
            replies: [
                'Visiting hours for ICU are 10am-12pm and 4pm-6pm.',
                'Only one visitor is allowed at a time.'
            ]
        },
        {
            id: 1,
            text: 'What is the timing of DR Ikbal?',
            replies: [
                'dr ikbal timing is 10am-12pm .',
                'Only one visitor is allowed at a time.'
            ]
        }
     
    ]);

    const handleAskQuestion = () => {
        if (question.trim()) {
            setQuestions(prev => [...prev, { id: Date.now(), text: question, replies: [] }]);
            setQuestion('');
        }
    };

    const styles = {
        container: {
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#f7f7f9',
            minHeight: '100vh'
        },
        inputBox: {
            width: '80%',
            padding: '15px',
            fontSize: '18px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            marginBottom: '20px'
        },
        button: {
            padding: '10px 20px',
            fontSize: '16px',
            borderRadius: '5px',
            cursor: 'pointer',
            backgroundColor: '#3498db',
            color: 'white',
            border: 'none'
        },
        question: {
            width: '80%',
            padding: '15px',
            backgroundColor: '#fff',
            borderRadius: '5px',
            boxShadow: '0px 4px 8px rgba(0,0,0,0.1)',
            margin: '15px 0'
        },
        reply: {
            backgroundColor: '#e0e0e0',
            padding: '10px',
            borderRadius: '5px',
            margin: '10px 0'
        }
    };

    return (
        <div style={styles.container}>
            <h1>Community Questions</h1>
            <textarea
                value={question}
                onChange={e => setQuestion(e.target.value)}
                placeholder="Ask your question here..."
                rows="4"
                style={styles.inputBox}
            />
            <button onClick={handleAskQuestion} style={styles.button}>Ask</button>

            {questions.map(q => (
                <div key={q.id} style={styles.question}>
                    <h3>{q.text}</h3>
                    {q.replies.map((reply, index) => (
                        <div key={index} style={styles.reply}>
                            {reply}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default CommunityPage;
