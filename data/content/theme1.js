// Theme 1: Mechanics (IB DP Physics SL) - quick checks, revision links and exam-style questions.
// Keyed by subtopic id (matches window.TOPICS in data/topics.js).
//
// Schema per subtopic:
//   quickCheck: [{ item, q, options[], answer (0-based index), explain }]   - 2+ per checklist item
//   resources:  [{ title, source, url, type: "notes"|"video"|"simulation"|"questions"|"flashcards" }]
//   exam:       [{ type: "mcq", q, options[], answer, explain, marks }]
//               [{ type: "structured", q (stem), parts: [{ q, marks, markscheme: [..] }] }]
// Exam questions are original, written in IB style (not official IB past-paper items).
window.CONTENT = window.CONTENT || {};
Object.assign(window.CONTENT, {
  "1.1": {
    quickCheck: [
      { item: "1.1.1", q: "On a displacement–time graph, what does the gradient represent?", options: ["Velocity", "Acceleration", "Distance travelled", "Resultant force"], answer: 0, explain: "Gradient = Δs/Δt, which is velocity." },
      { item: "1.1.1", q: "On a velocity–time graph, what does the area under the line represent?", options: ["Acceleration", "Displacement", "Speed", "Time taken"], answer: 1, explain: "Area = v × t, which is displacement (change in position)." },
      { item: "1.1.2", q: "Acceleration is defined as…", options: ["the rate of change of displacement", "the rate of change of velocity", "speed in a given direction", "the change in speed"], answer: 1, explain: "a = Δv/Δt. It is a vector, so a change of direction alone is an acceleration." },
      { item: "1.1.2", q: "A car drives around a roundabout at a constant speed. Is it accelerating?", options: ["No, the speed is constant", "Yes, because its velocity changes direction", "Only if the engine force is larger than friction", "Only when it speeds up again"], answer: 1, explain: "Velocity is a vector. Changing direction changes velocity, so the car accelerates." },
      { item: "1.1.3", q: "Displacement is best described as…", options: ["the total length of the path travelled", "the change in position, with a direction", "speed multiplied by time", "the distance from the origin, always positive"], answer: 1, explain: "Displacement is a vector: change in position, including direction." },
      { item: "1.1.3", q: "Which of these quantities is a scalar?", options: ["Displacement", "Velocity", "Distance", "Acceleration"], answer: 2, explain: "Distance has magnitude only. The others all have a direction." },
      { item: "1.1.4", q: "A runner completes exactly one lap of a 400 m track and stops at the start line. What are the distance and displacement?", options: ["400 m and 400 m", "0 m and 400 m", "400 m and 0 m", "0 m and 0 m"], answer: 2, explain: "Distance counts the whole path (400 m). The runner ends where they started, so displacement is zero." },
      { item: "1.1.4", q: "A student walks 3 m east then 4 m north. What is the magnitude of their displacement?", options: ["1 m", "5 m", "7 m", "12 m"], answer: 1, explain: "Use Pythagoras: √(3² + 4²) = 5 m. The distance walked is 7 m." },
      { item: "1.1.5", q: "A bus travels 120 km in 2.0 h, stopping several times. Which statement is correct?", options: ["Its instantaneous speed was 60 km h⁻¹ throughout", "Its average speed was 60 km h⁻¹", "Its maximum speed was 60 km h⁻¹", "Its average velocity must be 60 km h⁻¹"], answer: 1, explain: "Average speed = total distance ÷ total time. The instantaneous speed varied." },
      { item: "1.1.5", q: "How do you find the instantaneous velocity at one moment from a curved displacement–time graph?", options: ["Divide the displacement by the time at that point", "Find the gradient of the tangent at that point", "Find the area under the curve up to that point", "Read the value off the y-axis"], answer: 1, explain: "Instantaneous velocity is the gradient of the tangent at that instant." },
      { item: "1.1.6", q: "A car accelerates uniformly from 5.0 m s⁻¹ to 25 m s⁻¹ in 4.0 s. What is its acceleration?", options: ["2.5 m s⁻²", "5.0 m s⁻²", "6.3 m s⁻²", "7.5 m s⁻²"], answer: 1, explain: "a = (v − u)/t = (25 − 5.0)/4.0 = 5.0 m s⁻²." },
      { item: "1.1.6", q: "Which equation of motion does NOT contain time?", options: ["v = u + at", "s = ut + ½at²", "v² = u² + 2as", "s = ½(u + v)t"], answer: 2, explain: "v² = u² + 2as links v, u, a and s without t. Use it when time is not given or needed." },
      { item: "1.1.7", q: "What does uniform acceleration look like on a velocity–time graph?", options: ["A horizontal line", "A straight line with a non-zero gradient", "A curve that gets steeper", "A line through the origin only"], answer: 1, explain: "Constant gradient means constant acceleration. It does not have to pass through the origin." },
      { item: "1.1.7", q: "A velocity–time graph curves upwards but its gradient gets smaller over time. What is happening?", options: ["The object is slowing down", "The acceleration is increasing", "The velocity is increasing but the acceleration is decreasing", "The object is moving at constant velocity"], answer: 2, explain: "Velocity still rises, but the gradient (acceleration) falls. This is typical of an object approaching terminal velocity." },
      { item: "1.1.8", q: "With no air resistance, what happens to the horizontal component of a projectile's velocity?", options: ["It decreases at 9.8 m s⁻²", "It stays constant", "It increases as the projectile falls", "It is zero at the top of the path"], answer: 1, explain: "No horizontal force acts, so the horizontal velocity is constant. Only the vertical component changes." },
      { item: "1.1.8", q: "At the highest point of its path, a projectile (no air resistance) has…", options: ["zero velocity and zero acceleration", "zero vertical velocity and acceleration g downwards", "zero acceleration but some horizontal velocity", "zero horizontal velocity and acceleration g"], answer: 1, explain: "Vertical velocity is momentarily zero, the horizontal velocity is unchanged, and acceleration is always g downwards." },
      { item: "1.1.9", q: "Compared with motion in a vacuum, how does air resistance affect a projectile's maximum height and range?", options: ["Both increase", "Both decrease", "Height decreases, range is unchanged", "No effect if the projectile is heavy"], answer: 1, explain: "Drag acts against the velocity, removing energy. Both the maximum height and the range are reduced." },
      { item: "1.1.9", q: "How does air resistance change the shape of the trajectory?", options: ["It stays a symmetrical parabola", "The descent is steeper than the ascent, so the path is no longer symmetrical", "The ascent is steeper than the descent", "The path becomes a straight line"], answer: 1, explain: "Horizontal velocity keeps falling, so the projectile comes down more steeply than it went up." }
    ],
    resources: [
      { title: "A.1 Kinematics: learn and notes", source: "RevisionDojo", url: "https://www.revisiondojo.com/ib/ib-physics-new/ib-physics-new-a1-kinematics/learn", type: "notes" },
      { title: "Kinematics: SL exam questions", source: "Save My Exams", url: "https://www.savemyexams.com/dp/physics/ib/23/sl/topic-questions/space-time-and-motion/kinematics", type: "questions" },
      { title: "Kinematics: SL flashcards", source: "Save My Exams", url: "https://www.savemyexams.com/dp/physics/ib/23/sl/flashcards/space-time-and-motion/kinematics/", type: "flashcards" },
      { title: "1-D Kinematics tutorial", source: "The Physics Classroom", url: "https://www.physicsclassroom.com/class/1DKin", type: "notes" },
      { title: "Projectile Motion simulation", source: "PhET (University of Colorado)", url: "https://phet.colorado.edu/en/simulations/projectile-motion", type: "simulation" },
      { title: "Space, Time and Motion question bank (SL)", source: "Revision Village", url: "https://www.revisionvillage.com/ib-physics/sl/questionbank/space-time-and-motion", type: "questions" }
    ],
    exam: [
      { type: "mcq", q: "An object is dropped from rest and falls 45 m. Ignore air resistance and take g = 10 m s⁻². How long does it take to fall?", options: ["1.5 s", "3.0 s", "4.5 s", "9.0 s"], answer: 1, explain: "s = ½gt², so 45 = 5t², t² = 9 and t = 3.0 s.", marks: 1 },
      { type: "mcq", q: "A car accelerates uniformly from rest to 20 m s⁻¹ in 10 s, then travels at a constant 20 m s⁻¹ for another 10 s. What is the total displacement?", options: ["200 m", "300 m", "400 m", "500 m"], answer: 1, explain: "Area under the v–t graph: triangle ½ × 10 × 20 = 100 m, plus rectangle 10 × 20 = 200 m. Total 300 m.", marks: 1 },
      { type: "mcq", q: "A stone is thrown horizontally at 15 m s⁻¹ from the top of a 20 m cliff. Ignore air resistance and take g = 10 m s⁻². How far from the base of the cliff does it land?", options: ["15 m", "20 m", "30 m", "40 m"], answer: 2, explain: "Vertical: 20 = 5t², so t = 2.0 s. Horizontal: 15 × 2.0 = 30 m.", marks: 1 },
      { type: "mcq", q: "Ball P is dropped from a height at the same instant that ball Q is projected horizontally from the same height. Air resistance is negligible. Which statement is correct?", options: ["P lands first", "Q lands first", "They land at the same time", "It depends on the masses"], answer: 2, explain: "Both start with zero vertical velocity and have the same vertical acceleration g. Horizontal motion does not affect vertical motion.", marks: 1 },
      { type: "mcq", q: "A ball is thrown vertically upwards at 20 m s⁻¹. Ignore air resistance and take g = 10 m s⁻². What is its maximum height?", options: ["10 m", "20 m", "40 m", "80 m"], answer: 1, explain: "v² = u² + 2as gives 0 = 400 − 20s, so s = 20 m.", marks: 1 },
      { type: "structured", q: "A football is kicked from level ground at 18 m s⁻¹ at an angle of 40° above the horizontal. Take g = 9.8 m s⁻² and ignore air resistance unless told otherwise.", parts: [
        { q: "Calculate the horizontal and vertical components of the initial velocity.", marks: 2, markscheme: ["uₓ = 18 cos 40° = 13.8 m s⁻¹ ✓", "u_y = 18 sin 40° = 11.6 m s⁻¹ ✓"] },
        { q: "Calculate the maximum height reached by the ball.", marks: 2, markscheme: ["Use v² = u² + 2as with v = 0 at the top: 0 = 11.6² − 2 × 9.8 × h ✓", "h = 6.8 m (accept 6.8 to 6.9 m) ✓"] },
        { q: "Calculate the horizontal range of the ball.", marks: 2, markscheme: ["Time of flight = 2 × 11.6/9.8 = 2.36 s ✓", "Range = 13.8 × 2.36 = 33 m (accept 32 to 33 m) ✓"] },
        { q: "Describe how air resistance would affect the maximum height, the range and the shape of the path.", marks: 2, markscheme: ["Maximum height and range are both reduced ✓", "Path is no longer symmetrical: the descent is steeper than the ascent ✓"] }
      ] },
      { type: "structured", q: "A driver travelling at 25 m s⁻¹ sees a hazard. Her reaction time is 0.70 s, then the car decelerates uniformly at 6.0 m s⁻² until it stops.", parts: [
        { q: "Calculate the distance travelled during the reaction time.", marks: 1, markscheme: ["25 × 0.70 = 17.5 m ✓"] },
        { q: "Calculate the braking distance.", marks: 2, markscheme: ["0 = 25² − 2 × 6.0 × s ✓", "s = 52 m ✓"] },
        { q: "State the total stopping distance.", marks: 1, markscheme: ["17.5 + 52.1 = 70 m (accept 69.6 m) ✓"] },
        { q: "Sketch and describe the velocity–time graph from the moment the driver sees the hazard until the car stops.", marks: 2, markscheme: ["Horizontal line at 25 m s⁻¹ for 0.70 s ✓", "Then a straight line with constant negative gradient, reaching zero at about 4.9 s ✓"] }
      ] }
    ]
  },

  "1.2": {
    quickCheck: [
      { item: "1.2.1", q: "Newton's first law states that an object…", options: ["always moves in the direction of the force on it", "stays at rest or moves at constant velocity unless a resultant force acts on it", "needs a constant force to keep moving", "accelerates in proportion to its mass"], answer: 1, explain: "No resultant force means no change in velocity. Motion does not need a force; acceleration does." },
      { item: "1.2.1", q: "A resultant force of 6.0 N acts on a 2.0 kg mass. What is its acceleration?", options: ["0.33 m s⁻²", "3.0 m s⁻²", "8.0 m s⁻²", "12 m s⁻²"], answer: 1, explain: "a = F/m = 6.0/2.0 = 3.0 m s⁻²." },
      { item: "1.2.2", q: "The Earth pulls a book downwards with a gravitational force. What is the Newton's third law partner of this force?", options: ["The table pushing the book upwards", "The book pushing down on the table", "The book pulling the Earth upwards", "Air resistance on the book"], answer: 2, explain: "Third-law pairs are the same type of force (here gravitational) and act on the two different bodies in the interaction." },
      { item: "1.2.2", q: "Which statement about a Newton's third law pair of forces is correct?", options: ["They act on the same object and cancel out", "They are equal in size, opposite in direction and act on different objects", "The larger object exerts the larger force", "They can be different types of force"], answer: 1, explain: "Because they act on different bodies, third-law pairs never cancel each other." },
      { item: "1.2.3", q: "A free-body diagram should show…", options: ["all forces in the system", "only the forces acting on one chosen object", "the forces the object exerts on other objects", "the velocity and acceleration of the object"], answer: 1, explain: "Isolate one body and draw only the forces acting on it, as arrows from the body." },
      { item: "1.2.3", q: "A box is at rest on a rough slope. Which forces belong on its free-body diagram?", options: ["Weight, normal force and friction", "Weight, normal force and a 'downhill force'", "Weight and friction only", "Normal force, friction and the force of the slope's angle"], answer: 0, explain: "There are only three: weight (down), normal force (perpendicular to the slope) and static friction (up the slope)." },
      { item: "1.2.4", q: "Forces of 8.0 N to the right and 5.0 N to the left act on an object. What is the resultant force?", options: ["3.0 N left", "3.0 N right", "13 N right", "Zero"], answer: 1, explain: "8.0 − 5.0 = 3.0 N in the direction of the larger force." },
      { item: "1.2.4", q: "A lift moves upwards at constant velocity. How does the cable tension T compare with the lift's weight W?", options: ["T > W", "T = W", "T < W", "T = 0"], answer: 1, explain: "Constant velocity means zero acceleration, so the resultant force is zero and T = W." },
      { item: "1.2.5", q: "A block presses on a floor with a normal force of 50 N. The coefficient of static friction is 0.40. What is the maximum static friction force?", options: ["8.0 N", "20 N", "50 N", "125 N"], answer: 1, explain: "F ≤ μₛN = 0.40 × 50 = 20 N. Static friction only reaches this value when the block is about to slip." },
      { item: "1.2.5", q: "A spring with k = 200 N m⁻¹ is stretched by 0.050 m within its elastic limit. What is the restoring force?", options: ["4.0 N", "10 N", "40 N", "4000 N"], answer: 1, explain: "Hooke's law: F = −kx, magnitude 200 × 0.050 = 10 N, directed back towards the equilibrium position." },
      { item: "1.2.5", q: "Stokes' law gives the viscous drag on a small sphere as F = 6πηrv. Which change would double the drag?", options: ["Doubling the density of the sphere", "Doubling the speed of the sphere", "Doubling the sphere's mass", "Halving the fluid viscosity"], answer: 1, explain: "Drag is proportional to η, r and v. Stokes' law applies to small spheres moving slowly (laminar flow)." },
      { item: "1.2.5", q: "The buoyancy force on an object fully submerged in water equals…", options: ["the weight of the object", "the weight of water displaced by the object", "the mass of the object × g", "the water pressure at the bottom of the object"], answer: 1, explain: "B = ρ_fluid V g: the weight of fluid displaced (Archimedes' principle)." },
      { item: "1.2.5", q: "For the same two surfaces, how do the coefficients of static (μₛ) and dynamic (μd) friction usually compare?", options: ["μd > μₛ", "μd < μₛ", "They are always equal", "μd is always zero"], answer: 1, explain: "It usually takes more force to start an object sliding than to keep it sliding, so μd < μₛ." },
      { item: "1.2.6", q: "What is the weight of a 5.0 kg mass on Earth (g = 9.8 N kg⁻¹)?", options: ["5.0 N", "9.8 N", "49 N", "0.51 N"], answer: 2, explain: "W = mg = 5.0 × 9.8 = 49 N." },
      { item: "1.2.6", q: "Which of these is NOT a field force?", options: ["Weight", "Electric force between charges", "Magnetic force on a moving charge", "Friction"], answer: 3, explain: "Friction is a contact force. Field forces act at a distance through a field." }
    ],
    resources: [
      { title: "A.2 Forces and Momentum: notes", source: "RevisionDojo", url: "https://www.revisiondojo.com/ib/ib-physics-new/ib-physics-new-a2-forces-and-momentum", type: "notes" },
      { title: "Newton's Laws tutorial", source: "The Physics Classroom", url: "https://www.physicsclassroom.com/class/newtlaws", type: "notes" },
      { title: "Space, Time and Motion topic hub (SL)", source: "Save My Exams", url: "https://www.savemyexams.com/dp/physics/ib/23/sl/topics/space-time-and-motion/", type: "notes" },
      { title: "Forces and Motion: Basics simulation", source: "PhET (University of Colorado)", url: "https://phet.colorado.edu/en/simulations/forces-and-motion-basics", type: "simulation" },
      { title: "Hooke's Law simulation", source: "PhET (University of Colorado)", url: "https://phet.colorado.edu/en/simulations/hookes-law", type: "simulation" }
    ],
    exam: [
      { type: "mcq", q: "A horizontal force of 20 N pulls a 4.0 kg box along a rough floor. The friction force is 8.0 N. What is the acceleration of the box?", options: ["2.0 m s⁻²", "3.0 m s⁻²", "5.0 m s⁻²", "7.0 m s⁻²"], answer: 1, explain: "Resultant = 20 − 8.0 = 12 N. a = 12/4.0 = 3.0 m s⁻².", marks: 1 },
      { type: "mcq", q: "A 60 kg person stands on scales in a lift that is accelerating upwards at 2.0 m s⁻². Take g = 10 m s⁻². What do the scales read?", options: ["480 N", "600 N", "720 N", "1200 N"], answer: 2, explain: "N − mg = ma, so N = 60(10 + 2.0) = 720 N.", marks: 1 },
      { type: "mcq", q: "A block slides down a slope inclined at θ to the horizontal at constant velocity. What is the coefficient of dynamic friction?", options: ["sin θ", "cos θ", "tan θ", "1/tan θ"], answer: 2, explain: "Constant velocity: mg sin θ = μd mg cos θ, so μd = tan θ.", marks: 1 },
      { type: "mcq", q: "A small steel sphere falls through oil at terminal velocity. Which relationship is correct?", options: ["Drag = weight + buoyancy", "Drag + buoyancy = weight", "Buoyancy = weight + drag", "Drag = 0"], answer: 1, explain: "At terminal velocity the resultant force is zero. Upward forces (drag + buoyancy) balance the weight.", marks: 1 },
      { type: "mcq", q: "A horse pulls a cart forward. The cart pulls back on the horse with an equal force. Why can the horse and cart accelerate?", options: ["The horse's pull is slightly larger than the cart's pull", "The third-law pair act on different bodies; the forward push of the ground on the horse can exceed friction on the cart", "Newton's third law does not apply to living things", "The forces cancel, so they move at constant velocity"], answer: 1, explain: "Third-law pairs act on different objects, so they cannot cancel. Look at the external forces on the horse–cart system.", marks: 1 },
      { type: "structured", q: "A 12 kg box is pulled across a horizontal floor by a rope at 30° above the horizontal. The tension in the rope is 50 N. The coefficient of dynamic friction is 0.25. Take g = 9.8 m s⁻².", parts: [
        { q: "Draw a labelled free-body diagram for the box.", marks: 2, markscheme: ["Weight down and normal force up ✓", "Tension at 30° above horizontal and friction opposite the motion ✓"] },
        { q: "Show that the normal force on the box is about 93 N.", marks: 2, markscheme: ["N + T sin 30° = mg ✓", "N = 117.6 − 25 = 92.6 N ✓"] },
        { q: "Calculate the acceleration of the box.", marks: 3, markscheme: ["Friction = 0.25 × 92.6 = 23 N ✓", "Horizontal component of tension = 50 cos 30° = 43.3 N ✓", "a = (43.3 − 23.2)/12 = 1.7 m s⁻² ✓"] }
      ] },
      { type: "structured", q: "A small steel ball is released from rest just below the surface of a tall tube of glycerol.", parts: [
        { q: "Explain, with reference to the forces acting, why the ball reaches a terminal velocity.", marks: 3, markscheme: ["Weight down; buoyancy and viscous drag up ✓", "Drag increases as speed increases ✓", "When drag + buoyancy = weight, the resultant force is zero, so acceleration is zero and speed stays constant ✓"] },
        { q: "State one condition needed for Stokes' law to apply to the ball.", marks: 1, markscheme: ["Any one: the ball is a small sphere / moves slowly / flow is laminar (not turbulent) / fluid extends far beyond the ball ✓"] }
      ] }
    ]
  },

  "1.3": {
    quickCheck: [
      { item: "1.3.1", q: "The principle of conservation of energy states that…", options: ["energy is always conserved as kinetic energy", "energy cannot be created or destroyed, only transferred or transformed", "energy is lost as heat in every process", "mechanical energy is always constant"], answer: 1, explain: "The total energy of an isolated system is constant. Some may be transferred to less useful forms." },
      { item: "1.3.1", q: "A ball falls through air and reaches terminal velocity. Which statement is correct?", options: ["Total energy decreases", "Mechanical energy is conserved", "Mechanical energy decreases but total energy is conserved", "Kinetic energy increases continuously"], answer: 2, explain: "Gravitational PE is transferred to thermal energy in the air and ball. The total is unchanged." },
      { item: "1.3.2", q: "When a force does 30 J of work on an object, how much energy is transferred?", options: ["0 J", "15 J", "30 J", "It depends on the time taken"], answer: 2, explain: "Work done = energy transferred." },
      { item: "1.3.2", q: "Which unit is equivalent to the joule?", options: ["N m⁻¹", "N m", "W s⁻¹", "kg m s⁻²"], answer: 1, explain: "W = Fs, so 1 J = 1 N m. (kg m s⁻² is the newton.)" },
      { item: "1.3.3", q: "In a Sankey diagram, what does the width of each arrow represent?", options: ["The time the transfer takes", "The amount of energy (or power) in that transfer", "The efficiency", "The type of energy"], answer: 1, explain: "Widths are drawn to scale, so the total width in equals the total width out." },
      { item: "1.3.3", q: "A motor takes in 500 J and transfers 350 J to useful kinetic energy. How wide is the 'wasted' arrow on a Sankey diagram scaled at 1 mm = 10 J?", options: ["15 mm", "35 mm", "50 mm", "85 mm"], answer: 0, explain: "Wasted = 500 − 350 = 150 J, which is 15 mm at this scale." },
      { item: "1.3.4", q: "A 20 N force pulls a sledge 5.0 m. The force is at 60° to the direction of motion. How much work does it do?", options: ["50 J", "87 J", "100 J", "0 J"], answer: 0, explain: "W = Fs cos θ = 20 × 5.0 × cos 60° = 50 J." },
      { item: "1.3.4", q: "Why does the centripetal force on an object in uniform circular motion do no work?", options: ["It is too small", "It is perpendicular to the displacement at every instant", "The object returns to its starting point", "It is balanced by another force"], answer: 1, explain: "cos 90° = 0, so W = Fs cos θ = 0. The speed (and KE) does not change." },
      { item: "1.3.5", q: "A net force does 40 J of work on a 2.0 kg object that starts at rest. What is its final speed?", options: ["4.5 m s⁻¹", "6.3 m s⁻¹", "20 m s⁻¹", "40 m s⁻¹"], answer: 1, explain: "Net work = ΔEₖ: 40 = ½ × 2.0 × v², so v = √40 = 6.3 m s⁻¹." },
      { item: "1.3.5", q: "If the speed of a car doubles, its kinetic energy…", options: ["doubles", "stays the same", "increases by a factor of 4", "halves"], answer: 2, explain: "Eₖ = ½mv², so Eₖ ∝ v². 2² = 4." },
      { item: "1.3.6", q: "Which expression gives the elastic potential energy stored in a spring?", options: ["kx", "½kx²", "mgh", "½mv²"], answer: 1, explain: "Eₚ = ½kx², the area under the force–extension graph." },
      { item: "1.3.6", q: "Kinetic energy can also be written in terms of momentum p. Which expression is correct?", options: ["Eₖ = p²/2m", "Eₖ = 2mp²", "Eₖ = p/2m", "Eₖ = mp²"], answer: 0, explain: "Eₖ = ½mv² = (mv)²/2m = p²/2m. This is in the data booklet." },
      { item: "1.3.7", q: "A pendulum bob is released from 0.20 m above its lowest point. With no friction, what is its speed at the bottom? (g = 9.8 m s⁻²)", options: ["1.4 m s⁻¹", "2.0 m s⁻¹", "3.9 m s⁻¹", "4.0 m s⁻¹"], answer: 1, explain: "mgh = ½mv², so v = √(2gh) = √(2 × 9.8 × 0.20) = 2.0 m s⁻¹." },
      { item: "1.3.7", q: "Objects slide from rest down different frictionless ramps from the same height. Their speed at the bottom depends on…", options: ["the angle of the ramp", "the mass of the object", "only the vertical height dropped", "the length of the ramp"], answer: 2, explain: "v = √(2gh). Mass cancels, and the shape of the path does not matter without friction." },
      { item: "1.3.8", q: "A ball is thrown vertically upwards (no air resistance). As it rises…", options: ["gravitational PE is transformed into kinetic energy", "kinetic energy is transformed into gravitational PE", "total mechanical energy increases", "kinetic energy stays constant"], answer: 1, explain: "The work done by gravity transfers kinetic energy into gravitational potential energy." },
      { item: "1.3.8", q: "A mass is dropped onto a vertical spring. At the moment of maximum compression, the mass's kinetic energy is…", options: ["at its maximum", "zero, with energy stored as elastic and gravitational PE", "equal to its original gravitational PE", "converted entirely to heat"], answer: 1, explain: "At maximum compression the mass is momentarily at rest. The energy is stored as elastic PE (minus the GPE change)." },
      { item: "1.3.9", q: "A student lifts a 50 kg load through 3.0 m in 6.0 s at constant speed. What is the useful power? (g = 9.8 m s⁻²)", options: ["25 W", "150 W", "245 W", "1470 W"], answer: 2, explain: "P = mgh/t = 50 × 9.8 × 3.0 / 6.0 = 245 W." },
      { item: "1.3.9", q: "A car moves at a constant 30 m s⁻¹ with a driving force of 1500 N. What power does the engine deliver to the wheels?", options: ["50 W", "1.5 kW", "45 kW", "450 kW"], answer: 2, explain: "P = Fv = 1500 × 30 = 45 000 W = 45 kW." },
      { item: "1.3.10", q: "A device has a power input of 2000 W and a useful power output of 1500 W. What is its efficiency?", options: ["33%", "67%", "75%", "133%"], answer: 2, explain: "Efficiency = useful output / input = 1500/2000 = 0.75 = 75%." },
      { item: "1.3.10", q: "Why can no machine have an efficiency greater than 100%?", options: ["Machines always get hot", "The useful output cannot exceed the input, because energy is conserved", "Friction can never be removed", "Power is always lost as sound"], answer: 1, explain: "Getting more energy out than you put in would break conservation of energy." }
    ],
    resources: [
      { title: "A.3 Work, Energy and Power: notes", source: "RevisionDojo", url: "https://www.revisiondojo.com/ib/ib-physics-new/ib-physics-new-a3-work-energy-and-power/notes", type: "notes" },
      { title: "IB Physics work, energy and power explained", source: "RevisionDojo blog", url: "https://www.revisiondojo.com/blog/ib-physics-work-energy-power-explained", type: "notes" },
      { title: "Work, Energy and Power tutorial", source: "The Physics Classroom", url: "https://www.physicsclassroom.com/class/energy", type: "notes" },
      { title: "Energy Skate Park simulation", source: "PhET (University of Colorado)", url: "https://phet.colorado.edu/en/simulations/energy-skate-park", type: "simulation" }
    ],
    exam: [
      { type: "mcq", q: "A 1000 kg car travelling at 20 m s⁻¹ brakes to rest in 50 m. What is the average braking force?", options: ["400 N", "2000 N", "4000 N", "8000 N"], answer: 2, explain: "Work done = loss of Eₖ: F × 50 = ½ × 1000 × 20² = 200 000 J, so F = 4000 N.", marks: 1 },
      { type: "mcq", q: "An electric motor lifts a 20 kg mass at a constant 0.50 m s⁻¹. The motor's input power is 200 W. Take g = 10 m s⁻². What is the efficiency of the motor?", options: ["25%", "50%", "75%", "100%"], answer: 1, explain: "Useful power = mgv = 20 × 10 × 0.50 = 100 W. Efficiency = 100/200 = 50%.", marks: 1 },
      { type: "mcq", q: "A ball is dropped from 5.0 m and bounces back up to 3.2 m. Air resistance is negligible. What fraction of its energy is lost in the bounce?", options: ["0.36", "0.40", "0.64", "1.8"], answer: 0, explain: "Energy ∝ height. Lost = (5.0 − 3.2)/5.0 = 0.36.", marks: 1 },
      { type: "mcq", q: "A spring (k = 400 N m⁻¹) is compressed by 0.10 m and launches a 0.050 kg ball horizontally. What is the launch speed? Ignore friction.", options: ["4.0 m s⁻¹", "6.3 m s⁻¹", "8.9 m s⁻¹", "40 m s⁻¹"], answer: 2, explain: "½kx² = ½ × 400 × 0.10² = 2.0 J = ½ × 0.050 × v², so v = √80 = 8.9 m s⁻¹.", marks: 1 },
      { type: "mcq", q: "What is the unit of power expressed in SI base units?", options: ["kg m s⁻²", "kg m² s⁻²", "kg m² s⁻³", "kg m s⁻¹"], answer: 2, explain: "W = J s⁻¹ = (kg m² s⁻²) s⁻¹ = kg m² s⁻³.", marks: 1 },
      { type: "structured", q: "A cyclist and bicycle have a total mass of 80 kg. They ride 300 m up a road at a constant 4.0 m s⁻¹, rising 15 m vertically. The total resistive force is 20 N. Take g = 9.8 m s⁻².", parts: [
        { q: "Calculate the gain in gravitational potential energy.", marks: 1, markscheme: ["mgh = 80 × 9.8 × 15 = 1.2 × 10⁴ J (11 760 J) ✓"] },
        { q: "Calculate the work done against the resistive forces.", marks: 1, markscheme: ["20 × 300 = 6000 J ✓"] },
        { q: "Calculate the useful power output of the cyclist.", marks: 2, markscheme: ["Time = 300/4.0 = 75 s ✓", "P = (11 760 + 6000)/75 = 240 W (accept 237 W) ✓"] },
        { q: "The cyclist's muscles are 25% efficient. Calculate the cyclist's power input.", marks: 1, markscheme: ["237/0.25 = 950 W (accept 940 to 960 W) ✓"] }
      ] },
      { type: "structured", q: "A 500 kg roller-coaster car starts from rest at the top of a track 30 m above the ground. Take g = 9.8 m s⁻².", parts: [
        { q: "Assuming no friction, calculate the speed of the car when it is 12 m above the ground.", marks: 2, markscheme: ["mgΔh = ½mv² with Δh = 18 m ✓", "v = √(2 × 9.8 × 18) = 19 m s⁻¹ (18.8) ✓"] },
        { q: "In reality, 20% of the energy lost from the gravitational store has been transferred away by the time the car is 12 m above the ground. Calculate the actual speed at this point.", marks: 2, markscheme: ["Eₖ = 0.80 × 500 × 9.8 × 18 = 7.06 × 10⁴ J ✓", "v = √(2 × 70 560/500) = 17 m s⁻¹ (16.8) ✓"] },
        { q: "State where the 'lost' energy has gone and explain why this does not contradict conservation of energy.", marks: 2, markscheme: ["Transferred to thermal energy (internal energy) of the track, wheels and air, and sound, by friction and air resistance ✓", "Total energy is unchanged; it has been transferred to less useful forms, so only mechanical energy decreases ✓"] }
      ] }
    ]
  },

  "1.4": {
    quickCheck: [
      { item: "1.4.1", q: "Which statement about linear momentum is correct?", options: ["It is a scalar equal to mv", "It is a vector equal to mv, in the direction of the velocity", "It is equal to ½mv²", "It is always conserved, even with external forces"], answer: 1, explain: "p = mv, a vector. Units: kg m s⁻¹ or N s." },
      { item: "1.4.1", q: "Total momentum is conserved when…", options: ["no external resultant force acts on the system", "the collision is elastic", "the objects stick together", "kinetic energy is conserved"], answer: 0, explain: "Momentum is conserved in an isolated system (no resultant external force), in all collisions and explosions." },
      { item: "1.4.2", q: "Impulse is equal to…", options: ["the change in kinetic energy", "force × distance", "the change in momentum", "mass × acceleration"], answer: 2, explain: "Impulse J = FΔt = Δp." },
      { item: "1.4.2", q: "Why do airbags reduce injuries in a crash?", options: ["They reduce the change in momentum of the passenger", "They increase the time taken to stop, so the force is smaller", "They absorb all of the momentum", "They increase the passenger's mass"], answer: 1, explain: "The change in momentum is fixed. F = Δp/Δt, so a longer Δt means a smaller force." },
      { item: "1.4.2", q: "What does the area under a force–time graph represent?", options: ["Work done", "Power", "Impulse (change in momentum)", "Acceleration"], answer: 2, explain: "Area = ∫F dt = impulse = Δp." },
      { item: "1.4.3", q: "Sand falls vertically onto a conveyor belt at 2.0 kg s⁻¹. The belt moves at 3.0 m s⁻¹. What extra horizontal force keeps the belt moving at constant speed?", options: ["0.67 N", "1.5 N", "6.0 N", "18 N"], answer: 2, explain: "F = (Δm/Δt) × v = 2.0 × 3.0 = 6.0 N. The mass is changing, so use F = Δp/Δt." },
      { item: "1.4.3", q: "Newton's second law in its most general form is…", options: ["F = ma", "F = Δp/Δt", "F = mv", "F = ½mv²"], answer: 1, explain: "F = Δp/Δt also works when mass changes (rockets, jets of water). F = ma is the special case with constant mass." },
      { item: "1.4.4", q: "In an elastic collision…", options: ["only momentum is conserved", "both momentum and total kinetic energy are conserved", "the objects stick together", "kinetic energy increases"], answer: 1, explain: "Momentum is conserved in every collision. 'Elastic' means kinetic energy is conserved too." },
      { item: "1.4.4", q: "Two objects collide and stick together. This collision is…", options: ["elastic", "perfectly (totally) inelastic", "an explosion", "impossible if momentum is conserved"], answer: 1, explain: "Sticking together gives the maximum possible loss of kinetic energy while conserving momentum." },
      { item: "1.4.5", q: "A stationary firework explodes into two pieces. Which statement is correct?", options: ["Total momentum and total kinetic energy are both zero afterwards", "Total momentum is zero; total kinetic energy has increased", "Total momentum increases", "Kinetic energy is conserved"], answer: 1, explain: "Momentum stays zero (pieces move in opposite directions). Chemical energy is transferred to kinetic energy." },
      { item: "1.4.5", q: "In an inelastic collision, the 'missing' kinetic energy is mainly…", options: ["destroyed", "transferred to thermal energy, sound and permanent deformation", "converted into momentum", "transferred to gravitational PE"], answer: 1, explain: "Total energy is conserved, but some kinetic energy goes into internal energy, sound and deformation." }
    ],
    resources: [
      { title: "A.2 Forces and Momentum: flashcards", source: "RevisionDojo", url: "https://www.revisiondojo.com/ib/ib-physics-new/ib-physics-new-a2-forces-and-momentum/flashcards", type: "flashcards" },
      { title: "IB Physics forces and momentum explained", source: "RevisionDojo blog", url: "https://www.revisiondojo.com/blog/ib-physics-forces-momentum-explained", type: "notes" },
      { title: "Momentum and its Conservation tutorial", source: "The Physics Classroom", url: "https://www.physicsclassroom.com/class/momentum", type: "notes" },
      { title: "Collision Lab simulation", source: "PhET (University of Colorado)", url: "https://phet.colorado.edu/en/simulations/collision-lab", type: "simulation" },
      { title: "Space, Time and Motion question bank (SL)", source: "Revision Village", url: "https://www.revisionvillage.com/ib-physics/sl/questionbank/space-time-and-motion", type: "questions" }
    ],
    exam: [
      { type: "mcq", q: "A 2.0 kg trolley moving at 3.0 m s⁻¹ collides with a stationary 1.0 kg trolley. They stick together. What is their common velocity?", options: ["1.0 m s⁻¹", "1.5 m s⁻¹", "2.0 m s⁻¹", "3.0 m s⁻¹"], answer: 2, explain: "2.0 × 3.0 = 3.0 × v, so v = 2.0 m s⁻¹.", marks: 1 },
      { type: "mcq", q: "For the collision in the previous question, how much kinetic energy is lost?", options: ["0 J", "3.0 J", "6.0 J", "9.0 J"], answer: 1, explain: "Before: ½ × 2.0 × 3.0² = 9.0 J. After: ½ × 3.0 × 2.0² = 6.0 J. Lost = 3.0 J.", marks: 1 },
      { type: "mcq", q: "A 0.20 kg ball hits a wall at 10 m s⁻¹ and rebounds at 8.0 m s⁻¹. The contact time is 0.050 s. What is the average force on the ball?", options: ["8.0 N", "40 N", "72 N", "360 N"], answer: 2, explain: "Δp = 0.20 × (10 + 8.0) = 3.6 N s, because the direction reverses. F = 3.6/0.050 = 72 N.", marks: 1 },
      { type: "mcq", q: "A 4.0 kg rifle fires a 0.010 kg bullet at 400 m s⁻¹. What is the recoil speed of the rifle?", options: ["0.10 m s⁻¹", "1.0 m s⁻¹", "4.0 m s⁻¹", "10 m s⁻¹"], answer: 1, explain: "Total momentum is zero: 4.0v = 0.010 × 400 = 4.0, so v = 1.0 m s⁻¹.", marks: 1 },
      { type: "mcq", q: "A force on a 0.50 kg ball, initially at rest, rises linearly from 0 to 200 N and falls back to 0 over 0.10 s (a triangular force–time graph). What is the ball's final speed?", options: ["10 m s⁻¹", "20 m s⁻¹", "40 m s⁻¹", "400 m s⁻¹"], answer: 1, explain: "Impulse = area = ½ × 0.10 × 200 = 10 N s. v = 10/0.50 = 20 m s⁻¹.", marks: 1 },
      { type: "structured", q: "Skater A (mass 60 kg) glides at 4.0 m s⁻¹ and catches skater B (mass 40 kg), who is at rest. They then move off together. Friction with the ice is negligible.", parts: [
        { q: "Calculate their common speed after the catch.", marks: 2, markscheme: ["60 × 4.0 = (60 + 40)v ✓", "v = 2.4 m s⁻¹ ✓"] },
        { q: "Show that the collision is inelastic and calculate the kinetic energy transferred.", marks: 3, markscheme: ["Eₖ before = ½ × 60 × 4.0² = 480 J ✓", "Eₖ after = ½ × 100 × 2.4² = 288 J ✓", "Eₖ is not conserved, so the collision is inelastic; 192 J transferred (to thermal energy etc.) ✓"] },
        { q: "Explain why momentum is conserved in this interaction even though kinetic energy is not.", marks: 2, markscheme: ["No resultant external force acts on the two-skater system (friction negligible, weight balanced by normal force) ✓", "The forces between the skaters are a Newton's third law pair, so the impulses are equal and opposite and the total Δp = 0 ✓"] }
      ] },
      { type: "structured", q: "A hose fires a horizontal jet of water at a wall. Water leaves the hose at 15 m s⁻¹ at a rate of 0.80 kg s⁻¹. On hitting the wall, the water stops moving horizontally and runs down the wall.", parts: [
        { q: "Calculate the force exerted by the water on the wall.", marks: 2, markscheme: ["F = (Δm/Δt) × Δv ✓", "= 0.80 × 15 = 12 N ✓"] },
        { q: "Suggest how the force would change if the water bounced straight back at the same speed. Explain your answer.", marks: 2, markscheme: ["Force doubles to 24 N ✓", "Change in velocity per kg is now 30 m s⁻¹ (15 to −15), so the rate of change of momentum doubles ✓"] }
      ] }
    ]
  },

  "1.5": {
    quickCheck: [
      { item: "1.5.1", q: "For an object in uniform circular motion, which statement is correct?", options: ["Velocity is constant and acceleration is zero", "Speed is constant and acceleration is directed towards the centre", "Acceleration is directed outwards", "Velocity points towards the centre"], answer: 1, explain: "Velocity is tangential; its direction changes continuously, so there is a centripetal acceleration towards the centre." },
      { item: "1.5.1", q: "A car travels at 20 m s⁻¹ around a bend of radius 50 m. What is its centripetal acceleration?", options: ["0.40 m s⁻²", "2.5 m s⁻²", "8.0 m s⁻²", "1000 m s⁻²"], answer: 2, explain: "a = v²/r = 400/50 = 8.0 m s⁻²." },
      { item: "1.5.1", q: "What provides the centripetal force for a car going round a flat bend?", options: ["The engine", "A separate 'centripetal force' that appears in circular motion", "Static friction between the tyres and the road", "The car's weight"], answer: 2, explain: "Centripetal force is not a new force. It is the resultant of real forces, here friction towards the centre." },
      { item: "1.5.1", q: "A ball on a string moves in a horizontal circle. If the string breaks, the ball moves off…", options: ["radially outwards", "along the tangent to the circle at that point", "towards the centre", "in a spiral"], answer: 1, explain: "With no centripetal force, the ball continues in a straight line with its instantaneous (tangential) velocity (Newton's first law)." },
      { item: "1.5.2", q: "A wheel turns at 120 revolutions per minute. What is its angular velocity?", options: ["2.0 rad s⁻¹", "4π rad s⁻¹ (≈ 12.6 rad s⁻¹)", "120 rad s⁻¹", "240π rad s⁻¹"], answer: 1, explain: "f = 120/60 = 2.0 Hz. ω = 2πf = 4π ≈ 12.6 rad s⁻¹." },
      { item: "1.5.2", q: "A point on a wheel is 0.30 m from the axle. The wheel has an angular velocity of 10 rad s⁻¹. What is the point's linear speed?", options: ["0.030 m s⁻¹", "3.0 m s⁻¹", "33 m s⁻¹", "30 m s⁻¹"], answer: 1, explain: "v = ωr = 10 × 0.30 = 3.0 m s⁻¹." },
      { item: "1.5.2", q: "Which expression for centripetal acceleration is correct?", options: ["a = ωr", "a = ω²r", "a = ω/r", "a = ωr²"], answer: 1, explain: "a = v²/r = ω²r = 4π²r/T²." }
    ],
    resources: [
      { title: "A.2 Forces and Momentum (includes circular motion): learn", source: "RevisionDojo", url: "https://www.revisiondojo.com/ib/ib-physics-new/ib-physics-new-a2-forces-and-momentum/learn", type: "notes" },
      { title: "Circular and Satellite Motion tutorial", source: "The Physics Classroom", url: "https://www.physicsclassroom.com/class/circles", type: "notes" },
      { title: "Centripetal force", source: "HyperPhysics (Georgia State University)", url: "http://hyperphysics.phy-astr.gsu.edu/hbase/cf.html", type: "notes" },
      { title: "Centripetal force and gravitation", source: "Khan Academy", url: "https://www.khanacademy.org/science/physics/centripetal-force-and-gravitation", type: "video" }
    ],
    exam: [
      { type: "mcq", q: "A 0.50 kg mass on a string 0.80 m long moves in a horizontal circle on a frictionless table at 4.0 m s⁻¹. What is the tension in the string?", options: ["2.5 N", "5.0 N", "10 N", "20 N"], answer: 2, explain: "T = mv²/r = 0.50 × 16/0.80 = 10 N.", marks: 1 },
      { type: "mcq", q: "An object moves in a circle of fixed radius. Its speed is doubled. By what factor does the centripetal force change?", options: ["½", "2", "4", "It stays the same"], answer: 2, explain: "F = mv²/r, so F ∝ v². 2² = 4.", marks: 1 },
      { type: "mcq", q: "A car drives over the top of a hump-backed bridge with radius of curvature r. What is the maximum speed at which it stays in contact with the road?", options: ["gr", "√(gr)", "√(2gr)", "g/r"], answer: 1, explain: "Contact is lost when N = 0, so mg = mv²/r and v = √(gr).", marks: 1 },
      { type: "mcq", q: "A coin sits 0.20 m from the centre of a turntable that rotates once every 2.0 s. What is the coin's centripetal acceleration?", options: ["0.63 m s⁻²", "1.3 m s⁻²", "2.0 m s⁻²", "3.9 m s⁻²"], answer: 2, explain: "ω = 2π/2.0 = π rad s⁻¹. a = ω²r = π² × 0.20 ≈ 2.0 m s⁻².", marks: 1 },
      { type: "mcq", q: "A ball on a string is whirled in a vertical circle at constant speed. Where is the tension in the string greatest?", options: ["At the top", "At the bottom", "Halfway up, on either side", "It is the same everywhere"], answer: 1, explain: "At the bottom: T − mg = mv²/r, so T = mg + mv²/r. At the top, weight helps provide the centripetal force.", marks: 1 },
      { type: "structured", q: "A 1200 kg car goes round a flat, horizontal bend of radius 40 m. The coefficient of static friction between the tyres and the road is 0.60. Take g = 9.8 m s⁻².", parts: [
        { q: "Identify the force that provides the centripetal force on the car.", marks: 1, markscheme: ["Static friction from the road on the tyres, directed towards the centre of the bend ✓"] },
        { q: "Calculate the maximum speed at which the car can go round the bend without skidding.", marks: 3, markscheme: ["Maximum friction = μₛmg ✓", "μₛmg = mv²/r, so v = √(μₛgr) ✓", "v = √(0.60 × 9.8 × 40) = 15 m s⁻¹ ✓"] },
        { q: "A passenger says they are 'thrown outwards' by a force on the bend. Explain why this description is incorrect.", marks: 2, markscheme: ["There is no outward force; the passenger tends to continue in a straight line (Newton's first law) ✓", "The door/seat must push inwards on the passenger to provide their centripetal force ✓"] }
      ] },
      { type: "structured", q: "A Ferris wheel of radius 20 m completes one revolution every 80 s. Take g = 9.8 m s⁻².", parts: [
        { q: "Calculate the angular velocity of the wheel.", marks: 1, markscheme: ["ω = 2π/80 = 0.079 rad s⁻¹ ✓"] },
        { q: "Calculate the linear speed of a rider.", marks: 1, markscheme: ["v = ωr = 0.0785 × 20 = 1.6 m s⁻¹ ✓"] },
        { q: "Calculate the centripetal acceleration of a rider.", marks: 1, markscheme: ["a = ω²r = 0.0785² × 20 = 0.12 m s⁻² ✓"] },
        { q: "Calculate the normal force on a 70 kg rider at the top of the wheel.", marks: 2, markscheme: ["mg − N = ma ✓", "N = 70 × (9.8 − 0.12) = 680 N ✓"] }
      ] }
    ]
  },

  "1.6": {
    quickCheck: [
      { item: "1.6.1", q: "Kepler's first law states that planets move in…", options: ["circular orbits with the Sun at the centre", "elliptical orbits with the Sun at one focus", "elliptical orbits with the Sun at the centre", "straight lines between gravitational pulls"], answer: 1, explain: "Orbits are ellipses with the Sun at one focus. A circle is a special case." },
      { item: "1.6.1", q: "According to Kepler's second law (equal areas in equal times), a planet moves…", options: ["fastest when closest to the Sun", "fastest when furthest from the Sun", "at constant speed", "fastest halfway between"], answer: 0, explain: "The line from the Sun sweeps equal areas in equal times, so the planet must move faster when it is nearer the Sun." },
      { item: "1.6.1", q: "Kepler's third law states that for planets orbiting the same star…", options: ["T ∝ r", "T² ∝ r³", "T³ ∝ r²", "T ∝ 1/r²"], answer: 1, explain: "T²/r³ is the same for all bodies orbiting the same central mass. For circular orbits, T² = 4π²r³/GM." },
      { item: "1.6.2", q: "The distance between two point masses is doubled. The gravitational force between them…", options: ["halves", "becomes one quarter", "doubles", "is unchanged"], answer: 1, explain: "F = GMm/r². This is an inverse-square law: (½)² = ¼." },
      { item: "1.6.2", q: "In F = GMm/r², what is r?", options: ["The radius of the larger body", "The distance between the surfaces", "The distance between the centres of mass", "The radius of the orbit's ellipse"], answer: 2, explain: "r is measured between the centres of the two masses." },
      { item: "1.6.3", q: "When can an extended body like a planet be treated as a point mass?", options: ["Only when it is not rotating", "When it is spherically symmetric and we look at points outside it, or its size is much smaller than the separation", "Only when it is very dense", "Never, for accurate work"], answer: 1, explain: "Outside a spherically symmetric body, the field is as if all the mass were at its centre." },
      { item: "1.6.3", q: "Why can the Earth and Moon be treated as point masses when calculating the force between them?", options: ["They have similar masses", "They are roughly spherical and their separation is large compared with their radii", "They orbit the Sun", "Their densities are uniform"], answer: 1, explain: "Approximate spherical symmetry plus large separation makes the point-mass model a good approximation." },
      { item: "1.6.4", q: "Gravitational field strength is defined as…", options: ["the force on any mass", "the gravitational force per unit mass on a small test mass", "the acceleration of a planet", "the mass per unit area"], answer: 1, explain: "g = F/m, measured with a small test mass that does not disturb the field. Units N kg⁻¹ (= m s⁻²)." },
      { item: "1.6.4", q: "Surface g on Earth is 9.8 N kg⁻¹. What is g at a height equal to one Earth radius above the surface?", options: ["4.9 N kg⁻¹", "2.45 N kg⁻¹", "9.8 N kg⁻¹", "1.1 N kg⁻¹"], answer: 1, explain: "The distance from the centre doubles, so g = GM/r² falls to ¼ × 9.8 = 2.45 N kg⁻¹." },
      { item: "1.6.5", q: "What do gravitational field lines show?", options: ["The path a mass always follows", "The direction of the force on a small mass; their spacing shows field strength", "Lines of equal gravitational force", "The orbit of a satellite"], answer: 1, explain: "Arrows point towards the mass (gravity is attractive); closer lines mean a stronger field." },
      { item: "1.6.5", q: "How are field lines drawn close to the Earth's surface, over a small region?", options: ["Radial lines spreading outwards", "Parallel, equally spaced lines pointing down", "Concentric circles", "Curved lines that cross"], answer: 1, explain: "Over a small region the field is approximately uniform, so the lines are parallel and evenly spaced." }
    ],
    resources: [
      { title: "D.1 Gravitational fields: notes", source: "RevisionDojo", url: "https://www.revisiondojo.com/ib/ib-physics-new/ib-physics-new-d11-laws-and-properties-of-gravitational-fields", type: "notes" },
      { title: "Gravitational Fields: SL structured exam questions", source: "Save My Exams", url: "https://savemyexams.com/dp/physics/sl/25/topic-questions/fields/gravitational-fields/structured-questions", type: "questions" },
      { title: "Gravitational Fields: SL flashcards", source: "Save My Exams", url: "https://www.savemyexams.com/dp/physics/ib/23/sl/flashcards/fields/gravitational-fields/", type: "flashcards" },
      { title: "Gravity and Orbits simulation", source: "PhET (University of Colorado)", url: "https://phet.colorado.edu/en/simulations/gravity-and-orbits", type: "simulation" },
      { title: "Kepler's Laws simulation", source: "PhET (University of Colorado)", url: "https://phet.colorado.edu/en/simulations/keplers-laws", type: "simulation" },
      { title: "Kepler's laws", source: "HyperPhysics (Georgia State University)", url: "http://hyperphysics.phy-astr.gsu.edu/hbase/kepler.html", type: "notes" }
    ],
    exam: [
      { type: "mcq", q: "A planet has twice the mass and twice the radius of the Earth. What is the gravitational field strength at its surface? (g on Earth = 9.8 N kg⁻¹)", options: ["2.45 N kg⁻¹", "4.9 N kg⁻¹", "9.8 N kg⁻¹", "19.6 N kg⁻¹"], answer: 1, explain: "g = GM/R² gives 2/2² = ½ of Earth's value: 4.9 N kg⁻¹.", marks: 1 },
      { type: "mcq", q: "Satellite X orbits a planet at 4 times the orbital radius of satellite Y. What is the ratio of the periods T_X/T_Y?", options: ["2", "4", "8", "16"], answer: 2, explain: "T² ∝ r³, so T ∝ r^(3/2). 4^(3/2) = 8.", marks: 1 },
      { type: "mcq", q: "Two 1000 kg spheres have their centres 1.0 m apart. What is the gravitational force between them? (G = 6.67 × 10⁻¹¹ N m² kg⁻²)", options: ["6.67 × 10⁻¹¹ N", "6.67 × 10⁻⁸ N", "6.67 × 10⁻⁵ N", "6.67 × 10⁻² N"], answer: 2, explain: "F = 6.67 × 10⁻¹¹ × 1000 × 1000/1.0² = 6.67 × 10⁻⁵ N.", marks: 1 },
      { type: "mcq", q: "What are the units of the gravitational constant G?", options: ["N m² kg⁻²", "N kg⁻¹", "N m kg⁻¹", "kg² N⁻¹ m⁻²"], answer: 0, explain: "G = Fr²/(Mm), so its units are N m² kg⁻².", marks: 1 },
      { type: "mcq", q: "There is a point on the line between the Earth and the Moon where the resultant gravitational field strength is zero. Where is it?", options: ["Exactly halfway", "Closer to the Earth", "Closer to the Moon", "There is no such point"], answer: 2, explain: "The Moon has much less mass, so its field equals the Earth's only at a point much closer to the Moon.", marks: 1 },
      { type: "structured", q: "Mars has a mass of 6.42 × 10²³ kg and a radius of 3.39 × 10⁶ m. G = 6.67 × 10⁻¹¹ N m² kg⁻².", parts: [
        { q: "Calculate the gravitational field strength at the surface of Mars.", marks: 2, markscheme: ["g = GM/R² = 6.67 × 10⁻¹¹ × 6.42 × 10²³/(3.39 × 10⁶)² ✓", "g = 3.7 N kg⁻¹ ✓"] },
        { q: "The moon Phobos orbits Mars in an approximately circular orbit of radius 9.38 × 10⁶ m. Show that its orbital period is about 2.8 × 10⁴ s.", marks: 3, markscheme: ["GMm/r² = m(4π²r/T²) ✓", "T = 2π√(r³/GM) = 2π√((9.38 × 10⁶)³/(4.28 × 10¹³)) ✓", "T = 2.76 × 10⁴ s ✓"] },
        { q: "State Kepler's third law and explain how your working in the previous part is consistent with it.", marks: 2, markscheme: ["T² is proportional to r³ for bodies orbiting the same central mass ✓", "The working gives T² = (4π²/GM) r³, where 4π²/GM is a constant for Mars ✓"] },
        { q: "State why Mars can be treated as a point mass in these calculations.", marks: 1, markscheme: ["Mars is (approximately) spherically symmetric and all the points considered are outside it / on its surface ✓"] }
      ] },
      { type: "structured", q: "This question is about gravitational field lines.", parts: [
        { q: "Sketch the gravitational field lines around an isolated spherical planet.", marks: 2, markscheme: ["Radial lines, evenly spaced around the planet ✓", "Arrows pointing inwards towards the centre ✓"] },
        { q: "Explain why the field close to the surface, over a small region, can be shown with parallel, equally spaced lines.", marks: 2, markscheme: ["Over a small region (small compared with the planet's radius) the radial lines are almost parallel ✓", "The change in distance from the centre is negligible, so g is approximately constant (uniform field) ✓"] }
      ] }
    ]
  }
});
