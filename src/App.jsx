import { useState } from 'react'

const navigation = [
  { label: 'Home', href: '/' },
  { label: 'Detail', href: '/detail' },
  { label: 'Case', href: '/case' },
  { label: 'Timeline', href: '/timeline' },
  { label: 'Guestbook', href: '/guestbook' },
]

const timelineEvents = [
  { time: '3:15 pm', detail: 'Alex leaves work, according to the fictional account.' },
  { time: '3:40 pm', detail: 'Alex is last seen near the Lantern Road bus stop.' },
  { time: '5:30 pm', detail: 'His family realizes he has not come home.' },
  { time: '6:10 pm', detail: 'His bag is found beside the bus timetable.' },
  { time: 'Just before dark', detail: 'A neighbor recalls seeing a white van nearby, but is unsure.' },
  { time: 'After dark', detail: 'Neighbors begin searching the streets nearby.' },
]

function PageHeader({ currentPath }) {
  return (
    <header className="site-header">
      <p className="site-owner">A page by Sam Carter</p>
      <h1>Midnight Mystery Files</h1>
      <p className="site-description">One small-town mystery: what happened to Alex on Lantern Road?</p>
      <nav className="main-nav" aria-label="Main navigation">
        {navigation.map((item) => (
          <a
            key={item.href}
            href={item.href}
            aria-current={currentPath === item.href ? 'page' : undefined}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  )
}

function FictionNote() {
  return (
    <p className="fiction-note">
      <b>A made-up story:</b> Briar Glen, Alex, and the events on this page are fictional.
    </p>
  )
}

function PersonPhoto() {
  return (
    <figure className="person-picture">
      <img
        className="missing-person-photo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5gG_cQiOtKmE7y-R9_7V-dU6lWNxCf9Rr8VL-JONls79q0lft7Wxx8xmd&s=10"
        alt="Portrait used to represent Alex, a fictional missing person."
      />
      <figcaption>Alex</figcaption>
    </figure>
  )
}

function StreetPhoto() {
  return (
    <figure className="street-picture">
      <img
        className="story-photo"
        src="/lantern-road-reference.png"
        alt="A busy historic European square with an ornate stone building."
      />
      <figcaption>
        An unrelated reference photo. This is not Lantern Road or a location from the story.
      </figcaption>
    </figure>
  )
}

function HomePage() {
  return (
    <main className="story home-page">
      <p className="date-line">Wednesday, November 11, 1998</p>
      <h2>Alex disappeared on Lantern Road</h2>
      <p className="byline">A fictional missing-person story by Sam Carter</p>
      <p>
        On November 11, 1998, Alex left work and never made it home. His family found his bag near a
        bus stop in Briar Glen. This site follows the story of his disappearance and the few clues left behind.
      </p>
      <FictionNote />
      <div className="home-feature">
        <PersonPhoto />
        <h3>Last seen near the bus stop</h3>
        <p>
          One neighbor remembers a white van nearby, but isn&apos;t sure. Nobody knows whether it had
          anything to do with Alex&apos;s disappearance.
        </p>
        <p><a href="/detail">Read what happened</a> · <a href="/case">Open Alex&apos;s case file</a></p>
      </div>
      <h3>Follow Alex&apos;s case</h3>
      <ul className="plain-list">
        <li><a href="/detail">Detail</a> — how Alex went missing.</li>
        <li><a href="/case">Case</a> — the clues and what we know.</li>
        <li><a href="/timeline">Timeline</a> — the events of that evening.</li>
        <li><a href="/guestbook">Guestbook</a> — leave a note about Alex&apos;s story.</li>
      </ul>
    </main>
  )
}

function DetailPage() {
  return (
    <main className="story">
      <p className="date-line">Wednesday, November 11, 1998</p>
      <h2>Alex&apos;s disappearance</h2>
      <p className="byline">Filed by Sam · updated 11:42 pm</p>
      <FictionNote />
      <PersonPhoto />
      <p>
        Alex didn&apos;t come home that evening. His family called a few friends, then drove the route
        he usually took. At the old stop on Lantern Road, they found his bag tucked beside the timetable.
      </p>
      <p>
        A neighbor later remembered a white van nearby, but she wasn&apos;t sure of its color and
        couldn&apos;t say who was inside. Nobody else remembered seeing it. It may have had nothing to
        do with Alex&apos;s disappearance.
      </p>
      <StreetPhoto />
      <h3>What we know about Alex&apos;s disappearance</h3>
      <ul className="plain-list">
        <li>Alex was last seen near the Lantern Road bus stop.</li>
        <li>His bag was found beside the bus timetable.</li>
        <li>A neighbor mentioned a van, but could not give a clear description.</li>
      </ul>
      <p className="closing-note">
        I have left the ending open. It&apos;s a mystery, not a real appeal for information.
      </p>
      <p><a href="/case">Read the case notes</a> · <a href="/timeline">See the timeline</a></p>
    </main>
  )
}

function CasePage() {
  return (
    <main className="story">
      <p className="date-line">Case file · No. 01</p>
      <h2>Alex — Lantern Road</h2>
      <p className="byline">Alex went missing on November 11, 1998 · Briar Glen (fictional)</p>
      <FictionNote />
      <PersonPhoto />
      <table className="case-facts">
        <tbody>
          <tr><th>Name</th><td>Alex (fictional character)</td></tr>
          <tr><th>Last seen</th><td>Near the Lantern Road bus stop</td></tr>
          <tr><th>Reported missing</th><td>November 11, 1998 (in the story)</td></tr>
          <tr><th>Known details</th><td>His bag was found beside the bus timetable</td></tr>
          <tr><th>Current status</th><td>Unresolved fictional story</td></tr>
        </tbody>
      </table>
      <h3>Notes from the file</h3>
      <p>
        There are only two details to work with: the bag at the stop and a neighbor&apos;s uncertain
        memory of a white van. Neither tells us what happened to Alex. The van may not have been
        connected at all.
      </p>
      <p>
        This file is part of a fictional mystery project. It is not a real missing-person notice;
        please don&apos;t use it to identify or contact anyone.
      </p>
      <p><a href="/detail">Read the full story</a> · <a href="/timeline">View events by time</a></p>
    </main>
  )
}

function TimelinePage() {
  return (
    <main className="story">
      <p className="date-line">Case file · No. 01</p>
      <h2>The evening Alex went missing</h2>
      <p className="byline">A timeline of Alex&apos;s disappearance in the fictional story</p>
      <FictionNote />
      <p>
        The times below are part of the story, not a record of a real event. Some details are uncertain,
        just as they are in Sam&apos;s notes.
      </p>
      <table className="timeline timeline-page-table">
        <tbody>
          {timelineEvents.map((event) => (
            <tr key={event.time}>
              <th>{event.time}</th>
              <td>{event.detail}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>What remains unclear</h3>
      <ul className="plain-list">
        <li>Whether the van was there at all.</li>
        <li>How long the bag had been beside the timetable.</li>
        <li>What happened after Alex was last seen.</li>
      </ul>
      <p><a href="/case">Back to the case file</a> · <a href="/detail">Read the story</a></p>
    </main>
  )
}

function GuestbookPage() {
  const [entries, setEntries] = useState([
    { name: 'Sam', message: 'Thanks for stopping by. The ending is still a mystery to me, too.' },
  ])
  const [error, setError] = useState('')

  function addEntry(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = formData.get('name').trim()
    const message = formData.get('message').trim()

    if (!name || !message) {
      setError('Please fill in both fields.')
      return
    }

    setEntries((currentEntries) => [...currentEntries, { name, message }])
    setError('')
    event.currentTarget.reset()
  }

  return (
    <main className="story">
      <p className="date-line">Visitors’ book</p>
      <h2>Guestbook</h2>
      <p className="byline">A place to leave a note for Sam</p>
      <p>
        Have a thought about the Lantern Road story? Leave a short note below. Entries stay in this
        page while it is open and are not sent to a server.
      </p>
      <p className="fiction-note">
        Please don&apos;t include personal details or information about real missing people. Alex and the
        case are fictional.
      </p>

      <form className="guestbook-form" onSubmit={addEntry}>
        <label htmlFor="guest-name">Your name</label>
        <input id="guest-name" name="name" maxLength="40" required />
        <label htmlFor="guest-message">Your note</label>
        <textarea id="guest-message" name="message" rows="4" maxLength="300" required />
        <button type="submit">Add to guestbook</button>
        {error && <p className="form-error" role="alert">{error}</p>}
      </form>

      <h3>Notes left here</h3>
      <ol className="guestbook-entries">
        {entries.map((entry, index) => (
          <li key={`${entry.name}-${index}`}>
            <b>{entry.name}</b>
            <p>{entry.message}</p>
          </li>
        ))}
      </ol>
    </main>
  )
}

function App() {
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/'
  const pageComponents = {
    '/': HomePage,
    '/detail': DetailPage,
    '/case': CasePage,
    '/timeline': TimelinePage,
    '/guestbook': GuestbookPage,
  }
  const CurrentPage = pageComponents[pathname] || HomePage

  return (
    <div className="personal-site" id="home">
      <PageHeader currentPath={pathname} />
      <div className="page-columns">
        <CurrentPage />
      </div>
      <footer className="site-footer">
        <p>Midnight Mystery Files · Made by Sam · 1998</p>
        <a href="/">Back to Home</a>
      </footer>
    </div>
  )
}

export default App
