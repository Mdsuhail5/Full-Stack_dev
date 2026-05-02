import { useState } from 'react'
import './App.css'

// Styles constants
const styles = {
    container: {
        padding: '20px',
    },
    title: {
        textAlign: 'center',
        marginBottom: '30px',
    },
    form: {
        maxWidth: '500px',
        margin: '0 auto 40px',
        padding: '20px',
        backgroundColor: 'white',
        borderRadius: '10px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    },
    input: {
        margin: '10px 0',
        padding: '10px',
        width: '100%',
        borderRadius: '5px',
        border: '1px solid #ddd',
        boxSizing: 'border-box',
    },
    submitButton: {
        marginTop: '10px',
        padding: '12px 30px',
        backgroundColor: '#1e90ff',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        width: '100%',
    },
    cardsGrid: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
    },
    emptyState: {
        textAlign: 'center',
        color: '#666',
        marginTop: '20px',
    },
    errorMessage: {
        color: '#ff4444',
        fontSize: '14px',
        marginTop: '5px',
    },
}

function App() {
    const [cards, setCards] = useState([])
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        interests: '',
        linkedIn: '',
        twitter: '',
    })
    const [error, setError] = useState('')

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
        if (error) setError('')
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!formData.name || !formData.description) {
            setError('Please fill in at least name and description')
            return
        }

        const interestsArray = formData.interests
            .split(',')
            .map(i => i.trim())
            .filter(i => i)

        const newCard = {
            id: Date.now(),
            name: formData.name,
            description: formData.description,
            interests: interestsArray,
            linkedIn: formData.linkedIn,
            twitter: formData.twitter,
        }

        setCards(prevCards => [...prevCards, newCard])
        setFormData({
            name: '',
            description: '',
            interests: '',
            linkedIn: '',
            twitter: '',
        })
        setError('')
    }

    const deleteCard = (id) => {
        setCards(prevCards => prevCards.filter(card => card.id !== id))
    }

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Business Card Generator</h1>

            <form onSubmit={handleSubmit} style={styles.form}>
                <input
                    name='name'
                    value={formData.name}
                    onChange={handleInputChange}
                    style={styles.input}
                    type='text'
                    placeholder='Enter your name'
                />
                <input
                    name='description'
                    value={formData.description}
                    onChange={handleInputChange}
                    style={styles.input}
                    type='text'
                    placeholder='Enter the description'
                />
                <input
                    name='interests'
                    value={formData.interests}
                    onChange={handleInputChange}
                    style={styles.input}
                    type='text'
                    placeholder='Enter interests (comma separated)'
                />
                <input
                    name='linkedIn'
                    value={formData.linkedIn}
                    onChange={handleInputChange}
                    style={styles.input}
                    type='url'
                    placeholder='LinkedIn URL'
                />
                <input
                    name='twitter'
                    value={formData.twitter}
                    onChange={handleInputChange}
                    style={styles.input}
                    type='url'
                    placeholder='Twitter URL'
                />
                {error && <p style={styles.errorMessage}>{error}</p>}
                <button type='submit' style={styles.submitButton}>
                    Add Card
                </button>
            </form>

            <div style={styles.cardsGrid}>
                {cards.map(card => (
                    <Card
                        key={card.id}
                        card={card}
                        onDelete={deleteCard}
                    />
                ))}
            </div>

            {cards.length === 0 && (
                <p style={styles.emptyState}>
                    No cards yet. Create your first business card above!
                </p>
            )}
        </div>
    )
}

const cardStyles = {
    card: {
        backgroundColor: 'white',
        border: '1px #e0e0e0 solid',
        borderRadius: '0.75rem',
        padding: 20,
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        width: '350px',
        position: 'relative',
    },
    deleteButton: {
        position: 'absolute',
        top: '10px',
        right: '10px',
        backgroundColor: '#ff4444',
        color: 'white',
        border: 'none',
        borderRadius: '50%',
        width: '30px',
        height: '30px',
        cursor: 'pointer',
        fontSize: '18px',
    },
    name: {
        fontSize: '1.8rem',
        marginBottom: '0.5rem',
        color: '#333',
    },
    description: {
        fontSize: '1rem',
        color: '#666666',
        marginBottom: '1rem',
    },
    interestsTitle: {
        fontSize: '1.2rem',
        marginBottom: '0.5rem',
        color: '#333',
    },
    interestsContainer: {
        marginBottom: '1rem',
    },
    interestTag: {
        display: 'inline-block',
        backgroundColor: '#f0f0f0',
        padding: '5px 10px',
        borderRadius: '15px',
        margin: '5px 5px 5px 0',
        fontSize: '0.9rem',
        color: '#555',
    },
    socialLinks: {
        marginTop: '15px',
    },
    socialButton: {
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        margin: '5px',
        cursor: 'pointer',
        fontSize: '14px',
    },
}

function Card({ card, onDelete }) {
    const { id, name, description, interests, linkedIn, twitter } = card

    return (
        <div style={cardStyles.card}>
            <button
                onClick={() => onDelete(id)}
                style={cardStyles.deleteButton}
                aria-label="Delete card"
            >
                ×
            </button>

            <h2 style={cardStyles.name}>{name}</h2>
            <p style={cardStyles.description}>{description}</p>

            {interests && interests.length > 0 && (
                <>
                    <h3 style={cardStyles.interestsTitle}>Interests</h3>
                    <div style={cardStyles.interestsContainer}>
                        {interests.map((interest, index) => (
                            <span key={index} style={cardStyles.interestTag}>
                                {interest}
                            </span>
                        ))}
                    </div>
                </>
            )}

            <div style={cardStyles.socialLinks}>
                {linkedIn && (
                    <SocialButton
                        href={linkedIn}
                        label="LinkedIn"
                        bgColor="#0077b5"
                    />
                )}
                {twitter && (
                    <SocialButton
                        href={twitter}
                        label="Twitter"
                        bgColor="#1DA1F2"
                    />
                )}
            </div>
        </div>
    )
}

function SocialButton({ href, label, bgColor }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
        >
            <button
                style={{
                    ...cardStyles.socialButton,
                    backgroundColor: bgColor,
                }}
            >
                {label}
            </button>
        </a>
    )
}

export default App
