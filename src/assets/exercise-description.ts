export interface ExerciseInfo {
  description: string;
  instructions: string[];
  benefits: string[];
  primaryMuscles: string[];
}
export interface ExercisesInfo {
  [key: string]: ExerciseInfo;
}

export const exerciseInfo: ExercisesInfo = {
  BARBELL_BACK_SQUAT: {
    description:
      'The barbell back squat is a compound exercise that targets multiple muscle groups in the lower body, particularly the quadriceps, hamstrings, glutes, and calves. It also engages the core muscles and requires stability and control throughout the movement.',
    instructions: [
      'Set up the barbell: Start by positioning the barbell on a squat rack at an appropriate height. The bar should be at about chest level.',
      'Load the barbell: Add weight plates to both ends of the barbell according to your desired resistance. Make sure the weight is evenly distributed on both sides.',
      'Approach the bar: Stand facing the bar with your feet shoulder-width apart. Position yourself underneath the bar so that it rests across your upper back and shoulders. Grasp the bar with an overhand grip slightly wider than shoulder-width apart.',
      'Set your stance: Step back from the rack, taking a couple of steps backward. Position your feet slightly wider than shoulder-width apart, with your toes slightly turned out. Ensure your feet are firmly planted on the ground.',
      'Prepare for the squat: Take a deep breath and brace your core muscles. Keep your chest up, shoulders back, and gaze forward. This is your starting position.',
      "Perform the squat: Initiate the movement by bending at your hips and knees simultaneously, as if you're sitting back into an imaginary chair. Keep your weight centered on your heels throughout the movement. Descend until your thighs are parallel to the ground or slightly below, while maintaining a neutral spine and an upright torso.",
      'Ascend from the squat: Push through your heels and extend your hips and knees to rise back up to the starting position. Exhale during the exertion phase.',
      'Repeat the exercise: Continue performing the squats for the desired number of repetitions. Maintain control, proper form, and range of motion throughout the set.',
    ],
    benefits: [
      'Lower body strength: Barbell back squats primarily target the muscles of the lower body, including the quadriceps, hamstrings, glutes, and calves. By performing this exercise, you can develop overall lower body strength and power, which can enhance your athletic performance, improve functional movements, and increase your ability to generate force.',
      'Muscle development: Barbell back squats are a highly effective exercise for muscle hypertrophy (muscle growth) in the lower body. The combination of heavy loading and compound movement recruits a large number of muscle fibers, stimulating muscle growth and development.',
      'Core stability: Maintaining proper form during barbell back squats requires a strong and stable core. The exercise engages the muscles of the abdomen, lower back, and hips to stabilize the spine and maintain an upright posture throughout the movement. Over time, this can lead to improved core strength and stability.',
      'Functional movement: Squatting is a fundamental movement pattern that is involved in many everyday activities and sports. Performing barbell back squats can enhance your ability to perform functional movements such as sitting down and standing up, lifting heavy objects from the ground, and participating in athletic activities that require lower body strength and stability.',
      'Hormonal response: Barbell back squats, especially when performed with heavy loads, can elicit a hormonal response in the body. They stimulate the release of anabolic hormones such as testosterone and growth hormone, which play a crucial role in muscle growth and overall body composition.',
      'Calorie burning and metabolism boost: Barbell back squats are a demanding exercise that requires significant energy expenditure. By incorporating squats into your workout routine, you can increase your calorie burn and potentially enhance your metabolic rate, promoting fat loss and weight management.',
      'Bone density and joint health: The load-bearing nature of barbell back squats can have positive effects on bone density, particularly in the lower body. Squats also promote joint health and mobility, as they require a full range of motion in the hips, knees, and ankles.',
      'Mental resilience: Barbell back squats are a challenging exercise that requires mental focus and determination. Consistently training and progressively increasing the weight can help build mental resilience and discipline, which can carry over to other aspects of life.',
    ],
    primaryMuscles: ['Hip', 'Leg'],
  },
  DUMBBELL_ROWS: {
    description:
      'Dumbbell rows, also known as bent-over dumbbell rows, are a compound exercise that primarily targets the muscles of the upper back, including the lats (latissimus dorsi), rhomboids, and traps. It also engages the biceps and core muscles.',
    instructions: [
      'Begin by standing with your feet shoulder-width apart, holding a dumbbell in each hand with a neutral grip (palms facing each other). Keep your knees slightly bent and your torso leaned forward, maintaining a flat back.',
      'Engage your core muscles to stabilize your body throughout the exercise.',
      'Start the movement by pulling one dumbbell upward towards your torso while keeping your elbow close to your body. Focus on squeezing your shoulder blades together and keeping your back muscles engaged.',
      'At the top of the movement, squeeze your back muscles for a brief moment to maximize the contraction.',
      'Slowly lower the dumbbell back down to the starting position in a controlled manner.',
      'Repeat the movement with the other arm.',
      'Continue alternating arms for the desired number of repetitions.',
    ],
    benefits: [
      'Upper back development: Dumbbell rows primarily target the muscles of the upper back, including the latissimus dorsi (lats), rhomboids, and traps. By regularly performing dumbbell rows, you can develop a strong and well-defined back, improving your posture and overall upper body aesthetics.',
      'Improved pulling strength: Dumbbell rows are a compound exercise that engages multiple muscle groups, including the back, biceps, and core muscles. As you increase the weight and intensity of the rows, you enhance your pulling strength, which can have a positive impact on other exercises like pull-ups, deadlifts, and rows using different equipment.',
      'Core stabilization: Maintaining a stable and rigid core is crucial during dumbbell rows. This exercise requires you to engage your core muscles to maintain proper form and balance. Over time, this can lead to improved core strength and stability, benefiting your overall functional fitness and preventing lower back injuries.',
      'Balanced muscle development: Dumbbell rows help address muscle imbalances in the upper body. Many people tend to have a stronger dominant side, leading to imbalances in strength and muscle development. By performing dumbbell rows unilaterally (one arm at a time), you can address these imbalances by focusing on each side independently, ensuring balanced development and reducing the risk of injury.',
      'Increased grip strength: Holding and stabilizing the dumbbells during rows requires a strong grip. Regularly performing dumbbell rows can help improve your grip strength, which can be beneficial for various activities in and out of the gym, such as lifting heavy objects and participating in sports that involve gripping.',
      'Versatility and convenience: Dumbbell rows can be performed with just a pair of dumbbells, making them a versatile and convenient exercise. You can do them at home or in the gym, making them accessible for individuals with limited equipment or time constraints.',
    ],
    primaryMuscles: ['Back / Wing'],
  },
  DUMBBELL_SHOULDER_PRESS: {
    description:
      'Dumbbell shoulder press is a weightlifting exercise that primarily targets the shoulder muscles. It is also known as dumbbell overhead press or dumbbell military press.',
    instructions: [
      'Start by sitting on a bench with back support, or you can also do it while standing.',
      'Hold a dumbbell in each hand at shoulder level, palms facing forward. Your elbows should be bent, and your upper arms should be parallel to the ground.',
      'Engage your core muscles to maintain stability and proper posture throughout the exercise.',
      'Begin the movement by pressing the dumbbells upward, extending your arms fully without locking the elbows. Exhale during the lifting phase.',
      'Pause briefly at the top of the movement, feeling the contraction in your shoulders.',
      'Slowly lower the dumbbells back to the starting position, allowing your elbows to bend and maintaining control throughout. Inhale during the lowering phase.',
      'Repeat the exercise for the desired number of repetitions.',
    ],
    benefits: [
      'Shoulder muscle development: Dumbbell shoulder press primarily targets the deltoid muscles of the shoulders, particularly the anterior (front), medial (middle), and to some extent, the posterior (rear) deltoids. This exercise helps strengthen and develop these muscles, resulting in improved shoulder aesthetics and overall upper body strength.',
      'Upper body strength and power: Dumbbell shoulder press is a compound exercise that engages multiple muscles, including the shoulders, triceps, and upper chest. By performing this exercise, you can increase your upper body strength and power, which can have a positive impact on other pressing movements and functional activities.',
      'Core stabilization: Maintaining a stable and strong core is essential during dumbbell shoulder press. The exercise requires you to engage your core muscles to stabilize your body and prevent excessive arching of the lower back. Over time, this can lead to improved core strength and stability, benefiting your overall functional fitness and posture.',
      'Balance and symmetry: Performing dumbbell shoulder press individually with each arm helps address any imbalances or strength discrepancies between your left and right sides. By working each arm independently, you can ensure balanced muscle development and correct any asymmetries that may exist.',
      'Joint stability and mobility: Dumbbell shoulder press promotes shoulder joint stability and mobility. As you press the dumbbells overhead, your shoulder joints and associated stabilizer muscles work to maintain proper alignment and control throughout the movement. Over time, this can contribute to improved shoulder joint health and flexibility.',
      'Functional carryover: The strength and stability gained from dumbbell shoulder press can have practical applications in daily life. It can enhance your ability to perform overhead movements, such as lifting objects or reaching overhead, with greater ease and control.',
      'Versatility and convenience: Dumbbell shoulder press can be performed with just a pair of dumbbells, making it a versatile and convenient exercise. You can do it in various settings, including home workouts or the gym, making it accessible for individuals with limited equipment or time constraints.',
    ],
    primaryMuscles: ['Shoulders'],
  },
};