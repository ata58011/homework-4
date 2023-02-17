import React from 'react'
import AboutSection from './AboutSection'
import ContactSection from './ContactSection'
import ProjectSection from './ProjectSection'

function PageContent() {
  return (
<>
  {/* Page content */}
  <div className="w3-content w3-padding" style={{ maxWidth: 1564 }}>

<ProjectSection></ProjectSection>
<AboutSection></AboutSection>
<ContactSection></ContactSection>

  </div>
</>
  )
}

export default PageContent